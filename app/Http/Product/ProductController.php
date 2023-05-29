<?php

namespace App\Http\Product;

use App\Http\Controllers\Controller;
use App\Http\ProductCategory\ProductCategoryService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;


class ProductController extends Controller
{
    private ProductService $productService;
    private ProductCategoryService $productCategoryService;

    /**
     * @param ProductService $productService
     * @param ProductCategoryService $productCategoryService
     */
    public function __construct(ProductService $productService, ProductCategoryService $productCategoryService)
    {
        $this->productService = $productService;
        $this->productCategoryService = $productCategoryService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $productCategories = $this->productCategoryService->getAllProductCategories();
        return Inertia::render('Product/ProductUpload', [
            "productCategories" => $productCategories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request):RedirectResponse
    {
        $this->productService->addNewProduct($request);
        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
