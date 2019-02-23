<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::namespace ('Auth')->group(function () {
    Route::post('login', 'LoginController@login');
    Route::post('register', 'RegisterController@register');
});

Route::group(['middleware' => ['api']], function () {
    Route::namespace ('Auth')->group(function () {
        Route::get('logout', 'LoginController@logout');
        Route::post('refresh', 'LoginController@refresh');
        Route::get('user', 'LoginController@me');
    });
});
