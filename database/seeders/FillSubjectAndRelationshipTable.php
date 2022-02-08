<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Subject;
use Illuminate\Database\Seeder;

class FillSubjectAndRelationshipTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            $subject = Subject::create([
                'name' => "subject $i"
            ]);

            $user = User::find($i + 1);
            if ($user) {
                $user->subjects()->attach($subject->id);
            }
        }
    }
}
