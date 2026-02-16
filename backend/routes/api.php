<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\MajorController;
use App\Http\Controllers\Api\CareerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Health check
Route::get('/health', fn() => response()->json([
    'status' => 'ok',
    'service' => 'Artikeys API',
    'version' => '1.0.0',
]));

// Public endpoints (consumed by Angular)
Route::get('/home', HomeController::class);
Route::get('/majors', [MajorController::class, 'index']);
Route::post('/careers/apply', [CareerController::class, 'apply']);

// Authenticated endpoints
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn(Request $request) => $request->user());
});
