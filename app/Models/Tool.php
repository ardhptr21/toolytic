<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'icon', 'site_link'];

    public function tags()
    {
        return $this->belongsToMany(Tag::class)->using(RoleUser::class);
    }
}
