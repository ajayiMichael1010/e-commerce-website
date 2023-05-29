<?php

use App\Http\Controllers\ProfileController;
use App\Http\ProductCategory\ProductCategoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Product\ProductController;
use App\Http\CustomerOrder\CustomerOrderController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/admin', [ DashboardController::class , "showAdminDashboard"])->name("showAdminDashboard");

Route::get("/", [HomeController::class, 'index'])->name('index');

Route::get("/cart", [CustomerOrderController::class,"cartPage"])->name("cartPage");

Route::get("/customer", [DashboardController::class, "showCustomerDashboard"])
    ->name("showCustomerDashboard");

Route::resources([
    'product' => ProductController::class,
    'product-category' => ProductCategoryController::class,
    'order' => CustomerOrderController::class
]);



require __DIR__.'/auth.php';
