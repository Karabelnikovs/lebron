<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class LeSpermController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Bronny');
    }
    public function bryce(Request $request)
    {
        return Inertia::render('Bryce');
    }
}
