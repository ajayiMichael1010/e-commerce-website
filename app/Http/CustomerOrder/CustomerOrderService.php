<?php

namespace App\Http\CustomerOrder;
use Illuminate\Http\Request;

interface CustomerOrderService
{
    public function addNewOder(Request $request);
    public function getAllOrders();
    public function getAllOrderByCustomer(int $customerId);
    public function cancleOrderById(int $orderId);
}
