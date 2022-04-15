<?php

use App\Http\Controllers\ToolController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');
Route::controller(ToolController::class)->prefix('tools')->group(function () {
    Route::get('/', 'index')->name('tools.index');
    Route::get('/{tool:slug}', 'show')->name('tools.show');
});
