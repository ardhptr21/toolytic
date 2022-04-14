<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ToolController extends Controller
{
    public function index()
    {
        return Inertia::render('Tools/List');
    }
}
