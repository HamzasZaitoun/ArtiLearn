<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Student record with bilingual name.
 *
 * @property array $name  JSON: {"en": "...", "ar": "..."}
 * @property string $email
 * @property int $academic_level_id
 */
class Student extends Model
{
    protected $fillable = ['name', 'email', 'academic_level_id'];

    protected $casts = [
        'name' => 'array',
    ];

    /**
     * The academic level this student belongs to.
     */
    public function academicLevel(): BelongsTo
    {
        return $this->belongsTo(AcademicLevel::class);
    }
}
