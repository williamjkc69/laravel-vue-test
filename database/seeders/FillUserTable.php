<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class FillUserTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            $user = [
                'name' => "Test User0$i",
                'email' => "test0$i@test.com",
                'email_verified_at' => now(),
                'password' => Hash::make(123123),
            ];
            User::create($user);
        }
    }
}
