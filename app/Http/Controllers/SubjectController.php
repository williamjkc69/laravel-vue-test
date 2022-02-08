<?php

namespace App\Http\Controllers;

class SubjectController extends Controller
{
    public function getSubjects()
    {
        $subjects = auth()->user()->subjects;
        return response()->json(['success' => true, 'subjects' => $subjects]);
    }
}
