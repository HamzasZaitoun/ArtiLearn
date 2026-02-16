<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CareerApplicationRequest;
use App\Services\CareerService;
use Illuminate\Http\JsonResponse;

/**
 * Handles career application submissions via the public API.
 */
class CareerController extends Controller
{
    public function __construct(
        private readonly CareerService $careerService,
    ) {
    }

    /**
     * POST /api/careers/apply
     * Submit a career application with CV upload.
     */
    public function apply(CareerApplicationRequest $request): JsonResponse
    {
        $submission = $this->careerService->submitApplication(
            $request->validated(),
            $request->file('cv'),
        );

        return response()->json([
            'message' => 'Application submitted successfully.',
            'data' => $submission,
        ], 201);
    }
}
