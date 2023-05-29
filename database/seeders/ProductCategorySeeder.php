<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductCategory::create([
            "product_category_name" => "Oil",
            "product_measuring_unit" => "Barrel",
        ]);
        ProductCategory::create([
            "product_category_name" => "Gasoline",
            "product_measuring_unit" => "Barrel",
        ]);
        ProductCategory::create([
            "product_category_name" => "Fuel",
            "product_measuring_unit" => "Barrel",
        ]);
    }
}
