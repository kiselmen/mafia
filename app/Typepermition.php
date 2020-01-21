<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
Use app\Permition;

class Typepermition extends Model

{
		//
	public $timestamps = false;
		
    protected $fillable = [
        'name'
    ];

    public function permitions(){
		return $this->hasMany('app\Permition');
	}
	
}
