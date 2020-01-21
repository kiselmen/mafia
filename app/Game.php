<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

Use app\Club;
Use app\Win;
Use app\User;
Use app\Firstshot;


class Game extends Model
{
    //

    protected $fillable = [
        'data', 'number', 'countit',
    ];

    public function club(){
		return $this->belongsTo('app\Club');
	}

    public function win(){
		return $this->belongsTo('app\Win');
	}

    public function users(){
		return $this->hasMany('App\User');
	}
	
    public function firstshot(){
		return $this->hasOne('App\Firstshots');
	}
	
	

}
