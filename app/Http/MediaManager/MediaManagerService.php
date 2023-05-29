<?php

namespace App\Http\MediaManager;

use Illuminate\Http\Request;

interface MediaManagerService
{
    public function uploadMedia($file);
}
