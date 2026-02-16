<?php

namespace Database\Seeders;

use App\Models\Student;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $students = [
            ['name' => ['en' => 'Ahmad Zaitoun', 'ar' => 'أحمد زيتون'], 'email' => 'ahmad@artikeys.com', 'academic_level_id' => 2],
            ['name' => ['en' => 'Rania Nasser', 'ar' => 'رانيا ناصر'], 'email' => 'rania@artikeys.com', 'academic_level_id' => 2],
            ['name' => ['en' => 'Khalid Mansour', 'ar' => 'خالد منصور'], 'email' => 'khalid@artikeys.com', 'academic_level_id' => 3],
        ];

        foreach ($students as $student) {
            Student::create($student);
        }
    }
}
