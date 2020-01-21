<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

Use app\User;
Use app\Game;

class Firstshot extends Model
{

    protected $fillable = [
        'points',
    ];

    //
    public function users(){
		return $this->hasMany('App\User');
	}
	
	public function game(){
		return $this->belongsTo('App\Game');
	}
}
