<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\HomeService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Aggregates public homepage data (news + testimonials).
 * Invokable — GET /api/home
 */
class HomeController extends Controller
{
    public function __construct(
        private readonly HomeService $homeService,
    ) {
    }

    /**
     * Return aggregated home page data filtered by Accept-Language header.
     */
    public function __invoke(Request $request): JsonResponse
    {
        $lang = $request->header('Accept-Language', 'en');

        return response()->json(
            $this->homeService->getHomePageData($lang)
        );
    }
}
