<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\Tool;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ToolController extends Controller
{
    public function index()
    {
        $tools = Tool::with('tags')->get();
        $tags = Tag::all();
        return Inertia::render('Tools/List', compact('tools', 'tags'));
    }

    public function show(Tool $tool)
    {
        $tool->load('tags');
        return Inertia::render('Tools/Detail', compact('tool'));
    }

    public function create()
    {
        $tags = Tag::all();
        return Inertia::render('Tools/Create', [
            "tags" => $tags,
            "store_url" => route('tools.store'),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'short' => 'required|string|min:100',
            'tags' => 'required|array',
            'description' => 'required|string|min:300',
            'video_id' => 'string|size:11',
            'icon' => 'image',
            'site_link' => 'string|url'
        ]);
        unset($validated['tags']);

        $icon = $request->file('icon');
        $tags = $request->input('tags');

        if ($icon) {
            $validated['icon'] = CloudinaryStorage::prefix('tools')->upload($icon->getRealPath(), $icon->getClientOriginalName());
        }

        $tool = Tool::create($validated);
        $tool->tags()->attach($tags);

        return to_route('tools.index');
    }
}
