<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTestimonialRequest;
use App\Models\Testimonial;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

/**
 * Admin CRUD controller for Testimonials.
 * Manages bilingual author names and content with active/inactive toggle.
 */
class TestimonialController extends Controller
{
    /**
     * Display a paginated list of testimonials.
     */
    public function index(): View
    {
        $testimonials = Testimonial::latest()->paginate(10);

        return view('admin.testimonials.index', compact('testimonials'));
    }

    /**
     * Show the create form.
     */
    public function create(): View
    {
        return view('admin.testimonials.create');
    }

    /**
     * Store a new bilingual testimonial.
     */
    public function store(StoreTestimonialRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        Testimonial::create([
            'author_name' => ['en' => $validated['author_en'], 'ar' => $validated['author_ar']],
            'content' => ['en' => $validated['content_en'], 'ar' => $validated['content_ar']],
            'rating' => $validated['rating'],
            'is_active' => $request->boolean('is_active'),
        ]);

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial created.');
    }

    /**
     * Show the edit form for a testimonial.
     */
    public function edit(Testimonial $testimonial): View
    {
        return view('admin.testimonials.edit', compact('testimonial'));
    }

    /**
     * Update an existing testimonial.
     */
    public function update(StoreTestimonialRequest $request, Testimonial $testimonial): RedirectResponse
    {
        $validated = $request->validated();

        $testimonial->update([
            'author_name' => ['en' => $validated['author_en'], 'ar' => $validated['author_ar']],
            'content' => ['en' => $validated['content_en'], 'ar' => $validated['content_ar']],
            'rating' => $validated['rating'],
            'is_active' => $request->boolean('is_active'),
        ]);

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial updated.');
    }

    /**
     * Delete a testimonial.
     */
    public function destroy(Testimonial $testimonial): RedirectResponse
    {
        $testimonial->delete();

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial deleted.');
    }
}
