<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'country' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'address' => 'required|string',
            'phone_number' => 'required|string',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => 'required|string',
        ]);

        $user = User::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'country' => $request->country,
            'state' => $request->state,
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        event(new Registered($user));

        Auth::login($user);

        $route = $request->role==="ROLE_ADMIN" ? "/admin" : "/customer";

        return  redirect($route,"Registration successful");
       // return redirect(RouteServiceProvider::HOME);
    }
}
