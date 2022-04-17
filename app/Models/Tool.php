<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Tool extends Model
{
    use HasFactory;
    use Sluggable;

    protected $fillable = ['name', 'short', 'description', 'video_id', 'icon', 'site_link'];

    public function tags()
    {
        return $this->belongsToMany(Tag::class)->using(RoleUser::class);
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
                'unique' => true,
            ]
        ];
    }
}
