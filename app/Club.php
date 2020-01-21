<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
Use User;
Use Land;
Use Town;
Use Typeclub;
Use Permition;



class Club extends Model


{

    protected $fillable = [
        'name', 'img', 'land_id', 'town_id', 'typeclub_id'
    ];

    public function users(){
        return $this->hasMany('App\User');
    }

    public function permitions(){
        return $this->hasMany('App\Permition');
    }

    public function land(){
        return $this->belongsTo('App\Land');
    }

    public function town(){
        return $this->belongsTo('App\Town');
    }

    public function typeclub(){
        return $this->belongsTo('App\Typeclub');
    }

    public function games(){
        return $this->hasMany('App\Game');
    }

}
