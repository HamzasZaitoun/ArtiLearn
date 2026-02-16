<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Career submission record from the public application form.
 *
 * @property string $name
 * @property string $phone
 * @property int $major_id
 * @property string $cv_path
 * @property int $years_of_experience
 */
class CareerSubmission extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'major_id',
        'cv_path',
        'years_of_experience',
    ];

    protected $casts = [
        'years_of_experience' => 'integer',
    ];

    /**
     * The major/specialization selected in the application.
     */
    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }
}
