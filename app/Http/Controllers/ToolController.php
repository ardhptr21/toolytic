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
}
