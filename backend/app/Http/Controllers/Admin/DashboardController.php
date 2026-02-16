<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CareerSubmission;
use App\Models\News;
use App\Models\Student;
use App\Models\Testimonial;
use Illuminate\View\View;

/**
 * Admin dashboard — displays platform-wide statistics.
 */
class DashboardController extends Controller
{
    /**
     * Show the admin dashboard with aggregate stats.
     */
    public function index(): View
    {
        $stats = [
            'news' => News::count(),
            'students' => Student::count(),
            'testimonials' => Testimonial::count(),
            'careers' => CareerSubmission::count(),
        ];

        $latestCareers = CareerSubmission::with('major')->latest()->take(5)->get();

        return view('admin.dashboard', compact('stats', 'latestCareers'));
    }
}
