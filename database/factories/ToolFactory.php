<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tool>
 */
class ToolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'short' => $this->faker->text(),
            'description' => $this->faker->paragraph(rand(5, 10)),
            'site_link' => $this->faker->url(),
            'slug' => $this->faker->slug(),
        ];
    }
}
