<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\News;
use App\Models\Testimonial;

/**
 * Aggregates public homepage data — news and testimonials.
 * Called by HomeController to keep the controller thin.
 */
class HomeService
{
    /**
     * Aggregate home page data (news + testimonials) for the given language.
     */
    public function getHomePageData(string $lang): array
    {
        return [
            'news' => $this->getLatestNews($lang),
            'testimonials' => $this->getActiveTestimonials($lang),
            'levels' => $this->getAcademicLevels($lang),
        ];
    }

    /**
     * Fetch the 6 most recent news articles, localized.
     */
    private function getLatestNews(string $lang): array
    {
        return News::latest('published_at')
            ->take(6)
            ->get()
            ->map(fn($item) => [
                'id' => $item->id,
                'title' => $item->title[$lang] ?? $item->title['en'] ?? '',
                'content' => $item->content[$lang] ?? $item->content['en'] ?? '',
                'image_path' => $item->image_path,
                'published_at' => $item->published_at?->format('M d, Y'),
            ])
            ->toArray();
    }

    /**
     * Fetch all academic levels, localized.
     */
    private function getAcademicLevels(string $lang): array
    {
        return \App\Models\AcademicLevel::all()
            ->map(fn($item) => [
                'id' => $item->id,
                'name' => $item->name[$lang] ?? $item->name['en'] ?? '',
                'description' => $item->description[$lang] ?? $item->description['en'] ?? '',
            ])
            ->toArray();
    }

    /**
     * Fetch the 6 most recent active testimonials, localized.
     */
    private function getActiveTestimonials(string $lang): array
    {
        return Testimonial::where('is_active', true)
            ->latest()
            ->take(6)
            ->get()
            ->map(fn($item) => [
                'id' => $item->id,
                'author_name' => $item->author_name[$lang] ?? $item->author_name['en'] ?? '',
                'content' => $item->content[$lang] ?? $item->content['en'] ?? '',
                'author_image' => $item->author_image ? url($item->author_image) : null,
                'rating' => $item->rating,
            ])
            ->toArray();
    }
}
