<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Major/specialization with bilingual name and description.
 *
 * @property array $name         JSON: {"en": "...", "ar": "..."}
 * @property array $description  JSON: {"en": "...", "ar": "..."}
 */
class Major extends Model
{
    protected $fillable = ['name', 'description'];

    protected $casts = [
        'name' => 'array',
        'description' => 'array',
    ];

    /**
     * Career submissions that reference this major.
     */
    public function careerSubmissions(): HasMany
    {
        return $this->hasMany(CareerSubmission::class);
    }
}
