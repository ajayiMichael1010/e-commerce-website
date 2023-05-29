<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Hashing\BcryptHasher;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         User::create([
             'full_name' => 'Test UserSeeder',
             'email' => 'test@admin.com',
             'country' => 'Nigerian',
             'state' => 'FCT',
             'address' => 'Kubwa Abuja',
             'phone_number' => '08062875805',
             'password' => bcrypt('12345678'),
             'role' => 'ROLE_ADMIN',
         ]);
    }
}
