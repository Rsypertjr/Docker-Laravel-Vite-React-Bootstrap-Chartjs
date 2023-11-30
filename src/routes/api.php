<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\CustomerSQL;
use App\Models\CustomerMongoDB;
use App\Models\StateElectionDataMongoDB;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::get('/ping', function (Request $request) {
    $connection = DB::connection('mongodb');
    $msg = 'MongoDB is accessible';
    try {
        $connection->command(['ping' => 1]);
    } catch (\Exception $e) {
        $msg = 'MongoDB is not accessible. Error: ' . $e->getMessage();
    }

    return ['msg' => $msg];
});



Route::get('/create_eloquent_sql/', function (Request $request) {
    $success = CustomerSQL::create([
        'guid' => 'cust_0000',
        'first_name' => 'John',
        'family_name' => 'Doe',
        'email' => 'j.doe@gmail.com',
        'address' => '123 my street, my city, zip, sate, country'
    ]);

    return $success;
});
Route::get('/create_eloquent_mongo/', function (Request $request) {
    $success = CustomerMongoDB::create([
        'guid' => 'cust_0000',
        'first_name' => 'John',
        'family_name' => 'Doe',
        'email' => 'j.doe@gmail.com',
        'address' => '123 my street, my city, zip, sate, country'
    ]);

    return $success;
});


Route::post('/create_election_data_mongo/', function (Request $request) {
   
        $success = StateElectionDataMongoDB::create([
            'guid' => $request->input('guid'),
            'race' => $request->input('race'),
            'year' => $request->input('year'),
            'dateHeadersStore' => $request->input('dateHeadersStore'),
            'dateDataBidenStore' => $request->input('dateDataBidenStore'),
            'dateDataBidenAddStore' => $request->input('dateDataBidenAddStore'), 
            'dateDataBidenAddDiffStore' => $request->input('dateDataBidenAddDiffStore'),
            'dateDataTrumpStore' => $request->input('dateDataTrumpStore'),
            'dateDataTrumpAddStore' => $request->input('dateDataTrumpAddStore'),
            'dateDataTrumpAddDiffStore' => $request->input('dateDataTrumpAddDiffStore'),
            'dateDataTotalStore' => $request->input('dateDataTotalStore'),
            'dateDataOtherStore' => $request->input('dateDataOtherStore'),
            'dateDataOtherAddStore' => $request->input('dateDataOtherAddStore'),
            'dateDataTotalAddStore' => $request->input('dateDataTotalAddStore'),
            'perRemainingTrumpStore' => $request->input('perRemainingTrumpStore'),
            'perRemainingBidenStore' => $request->input('perRemainingBidenStore'),
            'bidenSlices' => $request->input('bidenSlices'),
            'trumpSlices' => $request->input('trumpSlices'),
            'otherSlices' => $request->input('otherSlices'),
            'totalSlices' => $request->input('totalSlices'),
            'pieHeaders' => $request->input('pieHeaders'),
            'voteBins' => $request->input('voteBins'),
            'bin_headers' => $request->input('bin_headers'),
            'bin_biden' => $request->input('bin_biden'),
            'bin_trump' => $request->input('bin_trump'),
            'numPages' => $request->input('numPages'),
            'chartArray' => $request->input('chartArray'),
            'theVotes' => $request->input('theVotes'),
            'raceId' => $request->input('raceId'),
            'raceSlug' => $request->input('raceSlug'),
            'raceUrl' => $request->input('raceUrl')
        ]);    
        return $success;
 
});


Route::get('/check_election_data_mongo/{state}/', function(Request $request, string $state) {
    $check = StateElectionDataMongoDB::where('guid', $state)->get();
    return $check;
});


Route::get('/find_eloquent/', function (Request $request) {
    $customer = CustomerMongoDB::where('guid', 'cust_0000')->get();
    return $customer;
});


Route::get('/update_eloquent/', function (Request $request) {
    $result = CustomerMongoDB::where('guid', 'cust_1111')->update( ['first_name' => 'Jimmy'] );
});


Route::get('/delete_eloquent/', function (Request $request) {
    $result = CustomerMongoDB::where('guid', 'cust_1111')->delete();
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



