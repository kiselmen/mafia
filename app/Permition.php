<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Club;
use App\User;
use App\Typepermition;


class Permition extends Model

{
		//
	public $timestamps = false;
		
    protected $fillable = [
    "user_id", "typepermition_id", "club_id"];

    public function typepermition(){
		return $this->belongsTo('App\Typepermition');
	}
	
    public function user(){
//		return $this->belongsToMany('App\User','permition_user','permition_id','user_id');
		return $this->belongsTo('App\User');
	}
	
    public function club(){
		return $this->belongsTo('App\Club');
	}
}
