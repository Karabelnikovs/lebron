<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class LebronController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Lebron');
    }
    public function stats(Request $request)
    {
        return Inertia::render('Stats');
    }
    public function goat(Request $request)
    {
        return Inertia::render('Iesmins');
    }
}
