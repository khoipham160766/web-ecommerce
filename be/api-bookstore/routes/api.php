<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// category
use App\Http\Controllers\danh_muc_Controller;
Route::resource('category', danh_muc_Controller::class);

// product
use App\Http\Controllers\san_pham_Controller;
Route::resource('product',san_pham_Controller::class);

// customer
use App\Http\Controllers\khach_hang_Controller;
Route::resource('customer',khach_hang_Controller::class);

//employee
use App\Http\Controllers\nhan_vien_Controller;
Route::resource('employee',nhan_vien_Controller::class);

//  permission
use App\Http\Controllers\phan_quyen_Controller;
Route::resource('permission', phan_quyen_Controller::class);

// order
use App\Http\Controllers\don_hang_Controller;
Route::resource('order', don_hang_Controller::class);

// voucer
use App\Http\Controllers\khuyen_mai_Controller;
Route::resource('voucher', khuyen_mai_Controller::class);

// import
use App\Http\Controllers\nhap_hang_Controller;
Route::resource('import', nhap_hang_Controller::class);

// news
use App\Http\Controllers\tin_tuc_Controller;
Route::resource('news', tin_tuc_Controller::class);

// feedback
use App\Http\Controllers\phan_hoi_Controller;
Route::resource('feedback', phan_hoi_Controller::class);

// count
use App\Http\Controllers\count_Controller;
Route::get('count/product', [count_Controller::class, 'countProduct']);
Route::get('count/customer', [count_Controller::class, 'countCustomer']);
Route::get('count/ordercomplete', [count_Controller::class, 'countOrder']);
Route::get('count/news', [count_Controller::class, 'countNews']);

//detail order
use App\Http\Controllers\chi_tiet_don_hang_Controller;
Route::resource('orderdetail', chi_tiet_don_hang_Controller::class);

//dashboard
use App\Http\Controllers\dashboard_Controller;
route::get('bestbook',[dashboard_Controller::class,'bestBook']);
route::get('bestbookindexuser',[dashboard_Controller::class,'bestBookIndexUser']);
route::get('newbookindexuser',[dashboard_Controller::class,'newBookIndexUser']);
route::get('bestcustomer',[dashboard_Controller::class,'bestCustomer']);
route::get('allbook',[dashboard_Controller::class,'allBookIndexUser']);
route::get('searchbookincategory/{id}',[dashboard_Controller::class,'searchBookInCategory']);
