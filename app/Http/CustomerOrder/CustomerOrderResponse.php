<?php

namespace App\Http\CustomerOrder;

use App\Models\CustomerOrder;
use Illuminate\Database\Eloquent\Collection;

class CustomerOrderResponse
{
    public static function mapMultipleOrders(Collection $orders): array
    {
        return $orders->map(fn ($order) => self::mapSingleOrder($order))->all();
    }

    public static function mapSingleOrder(CustomerOrder $order){
        return [
            "id" =>$order->product_id,
            "product_name" => $order->getProduct->product_name,
            "product_image" => $order->getProduct->product_image,
            "quantity_ordered" => $order->quantity_ordered,
            "selling_price"  => $order->selling_price,
        ];
    }
}
