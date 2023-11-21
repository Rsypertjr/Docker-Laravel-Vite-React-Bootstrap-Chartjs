<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    //return view('welcome');
    //return inertia('Welcome');
    return inertia('VotesApp');
});


Route::get('/votes-app', function () {
    return inertia('VotesApp');
});

Route::get('/info', function() {
    phpinfo();
});

