<?php

namespace App\Http\ProductCategory;

use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;

class ProductCategoryImpl implements ProductCategoryService
{

    public function addNewProductCategory(Request $request): void
    {
        $productCategory = new ProductCategory;
        $productCategory->product_category_name = $request->product_category_name;
        $productCategory->product_measuring_unit = $request->product_measuring_unit;
        $productCategory->save();
    }

    public function getAllProductCategories(): array
    {
        $productCategories = ProductCategory::all();
       return ProductCategoryResponse::mapAllProductCategories($productCategories);
    }

    public function updateProductCategory(int $categoryId)
    {
        // TODO: Implement updateProductCategory() method.
    }

    public function trashProductCategory(int $categoryId)
    {
        // TODO: Implement trashProductCategory() method.
    }
}
