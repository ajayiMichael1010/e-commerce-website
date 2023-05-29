<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            "product_name" => "Gasoline",
            "product_description" => "This is a gas",
            "product_image" =>"https://res.cloudinary.com/dg8z8uh8f/image/upload/v1685008435/bwefpraa30vfaxqnyisr.jpg",
            "product_quantity" => 120000,
            "cost_price" => "500000",
            "selling_price" => "600000",
            "quantity_remain" => "120000",
            "product_category_id" => 2
        ]);

        Product::create([
            "product_name" => "Disle Oil",
            "product_description" => "This is a dissle oil",
            "product_image" =>"https://res.cloudinary.com/dg8z8uh8f/image/upload/v1685009861/mcuim5v49j6shk1wia0p.jpg",
            "product_quantity" => 120000,
            "cost_price" => "500000",
            "selling_price" => "600000",
            "quantity_remain" => "120000",
            "product_category_id" => 1
        ]);

        Product::create([
            "product_name" => "Kerosine",
            "product_description" => "This is Kerosine",
            "product_image" =>"https://res.cloudinary.com/dg8z8uh8f/image/upload/v1685009952/zn4hpjz6vimai3zb4qsf.jpg",
            "product_quantity" => 120000,
            "cost_price" => "600000",
            "selling_price" => "700000",
            "quantity_remain" => "120000",
            "product_category_id" => 3
        ]);

        Product::create([
            "product_name" => "Petrolium",
            "product_description" => "This is petrolium",
            "product_image" =>"https://res.cloudinary.com/dg8z8uh8f/image/upload/v1685009989/olfmh3j1twl7lxydbdwi.jpg",
            "product_quantity" => 120000,
            "cost_price" => "700000",
            "selling_price" => "800000",
            "quantity_remain" => "120000",
            "product_category_id" => 3
        ]);

    }

}
