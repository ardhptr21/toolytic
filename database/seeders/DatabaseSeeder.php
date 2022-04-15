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
            'password' => bcrypt('admin'),
        ]);

        Tool::factory(100)->create();
        Tag::factory(10)->create();

        $tags = Tag::all();

        Tool::all()->each(function ($tool) use ($tags) {
            $tool->tags()->attach(
                $tags->random(rand(1, 3))
            );
        });
    }
}
