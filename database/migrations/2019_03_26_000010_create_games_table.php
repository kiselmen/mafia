<?php
 
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->increments('id');
            $table->date('data');
            $table->integer('number');
            
            $table->integer('club_id')->unsigned();
            $table->integer('win_id')->unsigned();
            $table->integer('countit');
 //           $table->integer('permition_id')->unsigned();
 
         	$table->foreign('club_id')->references('id')->on('clubs');
         	$table->foreign('win_id')->references('id')->on('wins');
          	

        });
    }
 
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
}
