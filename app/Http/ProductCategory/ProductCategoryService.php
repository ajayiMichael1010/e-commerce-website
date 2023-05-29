<?php

namespace App\Http\ProductCategory;

use Illuminate\Http\Request;

interface ProductCategoryService
{
    public function addNewProductCategory(Request $request);
    public function getAllProductCategories();
    public function updateProductCategory(int $categoryId);
    public function trashProductCategory(int $categoryId);
}
