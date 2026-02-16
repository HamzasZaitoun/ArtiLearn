<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Academic level (e.g., High School, Bachelor's, Master's, PhD).
 *
 * @property array $name         JSON: {"en": "...", "ar": "..."}
 * @property array $description  JSON: {"en": "...", "ar": "..."}
 */
class AcademicLevel extends Model
{
    protected $fillable = ['name', 'description'];

    protected $casts = [
        'name' => 'array',
        'description' => 'array',
    ];

    /**
     * Students enrolled at this academic level.
     */
    public function students(): HasMany
    {
        return $this->hasMany(Student::class);
    }
}
