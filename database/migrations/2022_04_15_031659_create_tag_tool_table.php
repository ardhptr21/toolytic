<?php

use App\Models\Tag;
use App\Models\Tool;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tag_tool', function (Blueprint $table) {
            $table->foreignIdFor(Tag::class)->constrained();
            $table->foreignIdFor(Tool::class)->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tag_tool');
    }
};
