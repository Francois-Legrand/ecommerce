<?php

use App\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::truncate();

        Role::create([
            'name' => 'super-admin',
        ]);
        Role::create([
            'name' => 'admin',
        ]);
        Role::create([
            'name' => 'guest',
        ]);



    }
}
