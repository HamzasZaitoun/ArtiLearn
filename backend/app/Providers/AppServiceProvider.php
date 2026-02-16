<?php

declare(strict_types=1);

namespace App\Providers;

use App\Models\CareerSubmission;
use App\Observers\CareerSubmissionObserver;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);

        // Register model observers for automated side-effects
        CareerSubmission::observe(CareerSubmissionObserver::class);
    }
}
