<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreNewsRequest;
use App\Models\News;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

/**
 * Admin CRUD controller for News articles.
 * Handles bilingual (EN/AR) content with image uploads.
 */
class NewsController extends Controller
{
    /**
     * Display a paginated list of news articles.
     */
    public function index(): View
    {
        $news = News::latest()->paginate(10);

        return view('admin.news.index', compact('news'));
    }

    /**
     * Show the create form.
     */
    public function create(): View
    {
        return view('admin.news.create');
    }

    /**
     * Store a new bilingual news article.
     */
    public function store(StoreNewsRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        $data = [
            'title' => ['en' => $validated['title_en'], 'ar' => $validated['title_ar']],
            'content' => ['en' => $validated['content_en'], 'ar' => $validated['content_ar']],
            'published_at' => $validated['published_at'],
        ];

        if ($request->hasFile('image')) {
            $data['image_path'] = $request->file('image')->store('news', 'public');
        }

        News::create($data);

        return redirect()->route('admin.news.index')->with('success', 'News article created successfully.');
    }

    /**
     * Show the edit form for a news article.
     */
    public function edit(News $news): View
    {
        return view('admin.news.edit', compact('news'));
    }

    /**
     * Update an existing news article.
     */
    public function update(StoreNewsRequest $request, News $news): RedirectResponse
    {
        $validated = $request->validated();

        $data = [
            'title' => ['en' => $validated['title_en'], 'ar' => $validated['title_ar']],
            'content' => ['en' => $validated['content_en'], 'ar' => $validated['content_ar']],
            'published_at' => $validated['published_at'],
        ];

        if ($request->hasFile('image')) {
            // Clean up the old image before storing the new one
            if ($news->image_path) {
                Storage::disk('public')->delete($news->image_path);
            }
            $data['image_path'] = $request->file('image')->store('news', 'public');
        }

        $news->update($data);

        return redirect()->route('admin.news.index')->with('success', 'News article updated successfully.');
    }

    /**
     * Delete a news article and its associated image.
     */
    public function destroy(News $news): RedirectResponse
    {
        if ($news->image_path) {
            Storage::disk('public')->delete($news->image_path);
        }

        $news->delete();

        return redirect()->route('admin.news.index')->with('success', 'News article deleted.');
    }
}
