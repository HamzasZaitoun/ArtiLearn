<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            AcademicLevelSeeder::class,
            MajorSeeder::class,
            NewsSeeder::class,
            TestimonialSeeder::class,
            StudentSeeder::class,
        ]);
    }
}

