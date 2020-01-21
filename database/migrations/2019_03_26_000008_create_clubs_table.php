<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClubsTable extends Migration
{ 
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clubs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',255);
            $table->string('img',255)->nullable();
            $table->integer('land_id')->unsigned();
            $table->integer('town_id')->unsigned();
            $table->integer('typeclub_id')->unsigned();
            $table->timestamps();
 
         	$table->foreign('land_id')->references('id')->on('lands');
        	$table->foreign('town_id')->references('id')->on('towns');
        	$table->foreign('typeclub_id')->references('id')->on('typeclubs');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clubs');
    }
}
