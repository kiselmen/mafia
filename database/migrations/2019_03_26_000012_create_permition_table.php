<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermitionTable extends Migration
{
    /** 
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permitions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('club_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->integer('typepermition_id')->unsigned();

        	$table->foreign('user_id')->references('id')->on('users');
        	$table->foreign('club_id')->references('id')->on('clubs');
        	$table->foreign('typepermition_id')->references('id')->on('typepermitions');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permitions');
    }
}
