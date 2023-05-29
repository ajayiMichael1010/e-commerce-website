<?php

namespace App\Http\Controllers;

use App\Http\CustomerOrder\CustomerOrderService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    private CustomerOrderService $customerOrderService;

    /**
     * @param CustomerOrderService $customerOrderService
     */
    public function __construct(CustomerOrderService $customerOrderService)
    {
        $this->customerOrderService = $customerOrderService;
    }

    public function showAdminDashboard(): Response
    {
        $userId = Auth::getUser()->getAuthIdentifier();
        $orders = $this->customerOrderService->getAllOrderByCustomer($userId);

        return Inertia::render("Admin/AdminDashboard",["orders" => $orders]);
    }

    public function showCustomerDashboard(): Response
    {
        $userId = Auth::getUser()->getAuthIdentifier();
        $orders = $this->customerOrderService->getAllOrderByCustomer($userId);

        return Inertia::render("Customer/CustomerDashboard",["orders" => $orders]);
    }
}
