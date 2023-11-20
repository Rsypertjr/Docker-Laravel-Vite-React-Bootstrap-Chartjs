<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Exception;
use MongoDB\Client;
use MongoDB\Driver\ServerApi;

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
        //
    }
}
