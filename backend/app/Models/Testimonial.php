<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Student testimonial with bilingual author name and content.
 *
 * @property array $author_name  JSON: {"en": "...", "ar": "..."}
 * @property array $content      JSON: {"en": "...", "ar": "..."}
 * @property int $rating
 * @property bool $is_active
 */
class Testimonial extends Model
{
    protected $fillable = ['author_name', 'content', 'author_image', 'rating', 'is_active'];

    protected $casts = [
        'author_name' => 'array',
        'content' => 'array',
        'rating' => 'integer',
        'is_active' => 'boolean',
    ];
}
