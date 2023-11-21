<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
use MongoDB\Laravel\Eloquent\Model;


class StateElectionDataMongoDB extends Model
{
    use HasFactory;

    // the selected database as defined in /config/database.php
    protected $connection = 'mongodb';

    // equivalent to $table for MySQL
    protected $collection = 'electiondata';

    // defines the schema for top-level properties (optional).
    protected $fillable = ['guid', 'race', 'year', 'dateHeadersStore', 'dateDataBidenStore', 'dateDataBidenAddStore', 'dateDataBidenAddDiffStore',
        'dateDataTrumpStore', 'dateDataTrumpAddStore', 'dateDataTrumpAddDiffStore', 'dateDataTotalStore','dateDataOtherStore',
        'dateDataOtherAddStore', 'dateDataTotalAddStore','perRemainingTrumpStore', 'perRemainingBidenStore', 'bidenSlices',
        'trumpSlices', 'otherSlices', 'totalSlices', 'pieHeaders', 'voteBins', 'bin_headers', 'bin_biden', 'bin_trump',
        'numPages', 'chartArray'];
}
