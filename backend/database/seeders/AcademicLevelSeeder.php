<?php

namespace Database\Seeders;

use App\Models\AcademicLevel;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AcademicLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $levels = [
            ['name' => ['en' => 'High School', 'ar' => 'المرحلة الثانوية'], 'description' => ['en' => 'Secondary education level', 'ar' => 'مرحلة التعليم الثانوي']],
            ['name' => ['en' => 'Middle School', 'ar' => 'المرحلة الإعدادية'], 'description' => ['en' => 'Middle school education level', 'ar' => 'مرحلة التعليم الإعدادي']],
            ['name' => ['en' => 'Primary School', 'ar' => 'المرحلة الابتدائية'], 'description' => ['en' => 'Primary education level', 'ar' => 'مرحلة التعليم الابتدائي']],
        ];

        foreach ($levels as $level) {
            AcademicLevel::create($level);
        }
    }
}
