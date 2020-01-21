<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
Use app\Club;

class Land extends Model

{
		//
	public $timestamps = false;
		
    protected $fillable = [
        'name'
    ];

    public function clubs(){
		return $this->hasMany('app\Club');
	}
	
}
