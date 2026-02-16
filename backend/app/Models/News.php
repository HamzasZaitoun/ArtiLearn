<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * News article with bilingual title and content.
 *
 * @property array $title       JSON: {"en": "...", "ar": "..."}
 * @property array $content     JSON: {"en": "...", "ar": "..."}
 * @property string|null $image_path
 * @property \Carbon\Carbon|null $published_at
 */
class News extends Model
{
    protected $fillable = ['title', 'content', 'image_path', 'published_at'];

    protected $casts = [
        'title' => 'array',
        'content' => 'array',
        'published_at' => 'datetime',
    ];
}
