<?php

namespace App\Http\ProductCategory;

use Illuminate\Database\Eloquent\Collection;

class ProductCategoryResponse
{
    public static function mapAllProductCategories(Collection $productCategories): array
    {
        return $productCategories->map(fn ($productCategory) => self::mapSingleProductCategory($productCategory))
            ->all();
    }

    public static function mapSingleProductCategory(mixed $productCategory): array
    {
        return [
            "id" => $productCategory->id,
            "name" => $productCategory->product_category_name,
            "measurement" => $productCategory->product_measuring_unit
        ];
    }
}
