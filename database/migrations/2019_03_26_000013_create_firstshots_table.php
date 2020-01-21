<?php
 
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFirstshotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('firstshots', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('game_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->decimal('points',4,2);
 //           $table->integer('permition_id')->unsigned();
 
         	$table->foreign('game_id')->references('id')->on('games');
         	$table->foreign('user_id')->references('id')->on('users');
         	 

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('firstshots');
    }
}
