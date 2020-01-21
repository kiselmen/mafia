<?php

namespace App\Http\Controllers;

use App\Club;
use Illuminate\Http\Request;
use DB;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//        $clubs = DB::table('clubs')
//            ->where('name', 'like', 'Н%')
//            ->get();
        $clubs = Club::with('land','town','typeclub')->get();
        return response()->json($clubs);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $club = new Club([
            'name'          => $request->get('name'),
            'land_id'       => $request->get('land'),
            'town_id'       => $request->get('town'),
            'typeclub_id'   => $request->get('type'),
        ]);
        $club->save();

//        return response()->json('Клуб добавлен успешно.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $club = Club::with('land','town','typeclub')->find($id);

        return response()->json($club);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $club = Club::find($id);

        return response()->json($club);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $club = Club::find($id);
        $club->name         = $request->get('name');
        $club->land_id      = $request->get('land');
        $club->town_id      = $request->get('town');
        $club->typeclub_id  = $request->get('type');

        return response()->json('Клуб изменен успешно.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $club = Club::find($id);
        $club->delete();

        return response()->json('Клуб удален успешно.');
    }
}
