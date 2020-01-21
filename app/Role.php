<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
Use app\Player;

class Role extends Model

{
		//
	public $timestamps = false;
		
    protected $fillable = [
        'name'
    ];

    public function players(){
		return $this->hasMany('app\Player');
	}
	
}
