<?php

namespace App\Http\Product;

use App\Http\MediaManager\MediaManagerService;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductServiceImpl implements ProductService
{
    private MediaManagerService $mediaManagerService;

    public function __construct(MediaManagerService $mediaManagerService){
        $this->mediaManagerService = $mediaManagerService;
    }
    public function addNewProduct(Request $request): void
    {
        $imageUrl =  $this->mediaManagerService->uploadMedia($request->file("product_image"));

        $product = new Product;

        $product->product_name = $request->product_name;
        $product->product_description = $request->product_description;
        $product->product_image = $imageUrl ;
        $product->product_quantity = $request->product_quantity ;
        $product->cost_price = $request->cost_price ;
        $product->selling_price = $request->selling_price ;
        $product->quantity_remain = $request->product_quantity ;
        $product->product_category_id =  $request->product_category_id;

        $product->save();
    }

    public function getAllProducts(): array
    {
       $products = Product::all();
       return ProductResponse::mapMultipleProducts($products);
    }

    public function getProductById(int $productId)
    {
        // TODO: Implement getProductById() method.
    }

    public function updateProductById(int $productId)
    {
        // TODO: Implement updateProductById() method.
    }
}
