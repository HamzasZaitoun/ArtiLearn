<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CareerSubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

/**
 * Admin controller for Career Submissions.
 * Lists, shows, and deletes individual submissions.
 * File cleanup on delete is handled automatically by CareerSubmissionObserver.
 */
class CareerSubmissionController extends Controller
{
    /**
     * Display a paginated list of career submissions.
     */
    public function index(): View
    {
        $submissions = CareerSubmission::with('major')->latest()->paginate(15);

        return view('admin.careers.index', compact('submissions'));
    }

    /**
     * Show a single career submission detail.
     */
    public function show(CareerSubmission $career): View
    {
        return view('admin.careers.show', compact('career'));
    }

    /**
     * Delete a career submission.
     * The CareerSubmissionObserver handles CV file cleanup automatically.
     */
    public function destroy(CareerSubmission $career): RedirectResponse
    {
        $career->delete();

        return redirect()
            ->route('admin.careers.index')
            ->with('success', 'Application deleted successfully.');
    }
}
