<?php

namespace Database\Seeders;

use App\Models\Tag;
use App\Models\Tool;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@toolytic.tool',
            'role' => 'admin',
            'password' => bcrypt('admin'),
        ]);

        if (env('APP_ENV') === 'local') {
            $this->call(TagsTableSeeder::class);
            // $this->call(ToolsTableSeeder::class);
        }
    }
}
