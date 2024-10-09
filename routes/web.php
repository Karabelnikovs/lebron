<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LeSpermController;
use App\Http\Controllers\LebronController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('welcome');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/lebron', [LebronController::class, 'index'])->name('lebron');
Route::get('/lesperm', [LeSpermController::class, 'index'])->name('lesperm');
Route::get('/lestats', [LebronController::class, 'stats'])->name('lestats');
Route::get('/lebryce', [LeSpermController::class, 'bryce'])->name('lebryce');
Route::get('/goat', [LebronController::class, 'goat'])->name('goat');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
