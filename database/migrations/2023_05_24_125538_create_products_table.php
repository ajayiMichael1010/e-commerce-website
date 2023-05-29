<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->string('product_description');
            $table->string('product_image');
            $table->bigInteger('product_quantity');
            $table->decimal('cost_price');
            $table->decimal('selling_price');
            $table->string('quantity_remain');
            $table->string('product_category_id');
            $table->softDeletes(); // this will create deleted_at field for
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
