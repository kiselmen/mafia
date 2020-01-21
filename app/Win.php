<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
Use app\Game;

class Win extends Model

{
		//
	public $timestamps = false;
		
    protected $fillable = [
        'name'
    ];

    public function games(){
		return $this->hasMany('app\Game');
	}
	
}
