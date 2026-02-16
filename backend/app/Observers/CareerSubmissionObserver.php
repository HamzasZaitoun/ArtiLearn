<?php

declare(strict_types=1);

namespace App\Observers;

use App\Models\CareerSubmission;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

/**
 * Observer for the CareerSubmission model.
 *
 * Handles automated side-effects when a CareerSubmission lifecycle event
 * is triggered. Currently implements file cleanup on record deletion
 * to prevent orphan CV files from accumulating on disk.
 */
class CareerSubmissionObserver
{
    /**
     * Handle the CareerSubmission "deleted" event.
     *
     * When an admin removes a career submission from the panel,
     * this hook automatically deletes the associated CV file from
     * the public storage disk, preventing orphan files.
     */
    public function deleted(CareerSubmission $submission): void
    {
        if ($submission->cv_path && Storage::disk('public')->exists($submission->cv_path)) {
            Storage::disk('public')->delete($submission->cv_path);

            Log::info('CareerSubmissionObserver: Deleted CV file', [
                'submission_id' => $submission->id,
                'cv_path' => $submission->cv_path,
            ]);
        }
    }
}
