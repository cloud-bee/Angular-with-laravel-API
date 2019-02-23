<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Http\Resources\UserCollection;

class GeneralController extends Controller
{
   /**
     * Create a new GeneralController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function user(){
        return Auth::user();
    }
}
