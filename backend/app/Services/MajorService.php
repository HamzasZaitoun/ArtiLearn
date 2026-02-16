<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Major;

/**
 * Provides major data formatted for the current language.
 * Used in the career application form dropdown.
 */
class MajorService
{
    /**
     * Get all majors formatted for the given language.
     */
    public function getAll(string $lang): array
    {
        return Major::all()
            ->map(fn($major) => [
                'id' => $major->id,
                'name' => $major->name[$lang] ?? $major->name['en'] ?? '',
                'description' => $major->description[$lang] ?? $major->description['en'] ?? '',
            ])
            ->toArray();
    }
}
