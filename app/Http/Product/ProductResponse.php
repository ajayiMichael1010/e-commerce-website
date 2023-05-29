<?php

namespace App\Http\Product;

use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

class ProductResponse
{
    public static function mapMultipleProducts(Collection $products): array
    {
       return $products->map(fn ($product) => self::mapSingleProduct($product))->all();
    }

    public static function mapSingleProduct(Product $product): array
    {
        return [
            "id" => $product->id,
            "product_name" => $product->product_name,
            "product_image" => $product->product_image,
            "selling_price" => $product->selling_price,
            "product_category" => $product->getProductCategory,
        ];
    }
}
