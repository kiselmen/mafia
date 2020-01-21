<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

Use app\Club;

class Typeclub extends Model


{
		//
		
    protected $fillable = [
        'name'
    ];

    public function clubs(){
		return $this->hasMany('app\Club');
	}
	
}
