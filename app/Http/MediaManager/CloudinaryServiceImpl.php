<?php

namespace App\Http\MediaManager;

use Illuminate\Http\Request;

class CloudinaryServiceImpl implements MediaManagerService
{

    public function uploadMedia($file):string
    {
       return $uploadedFileUrl = cloudinary()->upload($file->getRealPath())->getSecurePath();

    }
}
