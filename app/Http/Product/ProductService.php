<?php

namespace App\Http\Product;

use Illuminate\Http\Request;

interface ProductService
{
    public function addNewProduct(Request $request);
    public function getAllProducts();
    public function getProductById(int $productId);
    public function updateProductById(int $productId);
}
