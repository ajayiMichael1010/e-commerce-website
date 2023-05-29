<?php

namespace App\Http\CustomerOrder;

use App\Models\CustomerOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomerOrderImpl implements CustomerOrderService
{

    /**
     * Add new orders based on the provided request.
     *
     * @param \Illuminate\Http\Request $request
     * @return void
     */
    public function addNewOder(Request $request): void
    {
        $newOrders = $request->customer_new_orders;
        array_map([$this, 'singleOrder'], $newOrders);
    }

    /**
     * Process a single order and save it to the database.
     *
     * @param mixed $order
     * @return void
     */
    public function singleOrder($order): void
    {
        $customerOrder = new CustomerOrder;
        $customerOrder->user_id = Auth::id();
        $customerOrder->product_id = $order["id"];
        $customerOrder->quantity_ordered = $order["quantity"];
        $customerOrder->selling_price = floatval($order["selling_price"]);
        $customerOrder->is_delivered = false;

        $customerOrder->save();
    }


    public function getAllOrders()
    {
        // TODO: Implement getAllOrders() method.
    }

    public function getAllOrderByCustomer(int $customerId): array
    {
        $orders = CustomerOrder::with("getProduct")
            ->where("user_id","=",$customerId)
            ->get();

        return CustomerOrderResponse::mapMultipleOrders($orders);

    }

    public function cancleOrderById(int $orderId)
    {
        // TODO: Implement cancleOrderById() method.
    }
}
