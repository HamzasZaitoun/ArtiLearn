<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\MajorService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Provides major data for the career application dropdown.
 */
class MajorController extends Controller
{
    public function __construct(
        private readonly MajorService $majorService,
    ) {
    }

    /**
     * GET /api/majors
     * List all majors formatted for the current language.
     */
    public function index(Request $request): JsonResponse
    {
        $lang = $request->header('Accept-Language', 'en');

        return response()->json([
            'data' => $this->majorService->getAll($lang),
        ]);
    }
}
