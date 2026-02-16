<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\CareerSubmission;
use Illuminate\Http\UploadedFile;

/**
 * Handles career application processing.
 * Stores the CV on the public disk and creates the submission record.
 */
class CareerService
{
    /**
     * Process and store a career application.
     */
    public function submitApplication(array $validated, UploadedFile $cv): CareerSubmission
    {
        $cvPath = $cv->store('cvs', 'public');

        return CareerSubmission::create([
            'name' => $validated['name'],
            'phone' => $validated['phone'],
            'major_id' => $validated['major_id'],
            'cv_path' => $cvPath,
            'years_of_experience' => $validated['years_of_experience'],
        ]);
    }
}
