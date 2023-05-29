<?php

namespace App\Providers;

use App\Http\CustomerOrder\CustomerOrderImpl;
use App\Http\CustomerOrder\CustomerOrderService;
use App\Http\MediaManager\CloudinaryServiceImpl;
use App\Http\MediaManager\MediaManagerService;
use App\Http\Product\ProductService;
use App\Http\Product\ProductServiceImpl;
use App\Http\ProductCategory\ProductCategoryImpl;
use App\Http\ProductCategory\ProductCategoryService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(MediaManagerService::class,CloudinaryServiceImpl::class);
        $this->app->bind(ProductService::class,ProductServiceImpl::class);
        $this->app->bind(ProductCategoryService::class,ProductCategoryImpl::class);
        $this->app->bind(CustomerOrderService::class,CustomerOrderImpl::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
