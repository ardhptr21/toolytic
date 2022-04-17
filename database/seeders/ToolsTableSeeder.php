<?php

namespace Database\Seeders;

use App\Models\Tag;
use App\Models\Tool;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ToolsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tool::factory(100)->create();
        $tags = Tag::all();
        Tool::all()->each(function ($tool) use ($tags) {
            $tool->tags()->attach(
                $tags->random(rand(1, 3))
            );
        });
    }
}
