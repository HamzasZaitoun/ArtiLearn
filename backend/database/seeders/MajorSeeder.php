<?php

namespace Database\Seeders;

use App\Models\Major;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MajorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $majors = [
            ['name' => ['en' => 'Computer Science', 'ar' => 'علوم الحاسوب'], 'description' => ['en' => 'Study of computing and algorithms', 'ar' => 'دراسة الحوسبة والخوارزميات']],
            ['name' => ['en' => 'Graphic Design', 'ar' => 'التصميم الجرافيكي'], 'description' => ['en' => 'Visual communication and design', 'ar' => 'التواصل البصري والتصميم']],
            ['name' => ['en' => 'Business Administration', 'ar' => 'إدارة الأعمال'], 'description' => ['en' => 'Management and organizational skills', 'ar' => 'مهارات الإدارة والتنظيم']],
            ['name' => ['en' => 'Digital Marketing', 'ar' => 'التسويق الرقمي'], 'description' => ['en' => 'Online marketing strategies and analytics', 'ar' => 'استراتيجيات التسويق عبر الإنترنت والتحليلات']],
            ['name' => ['en' => 'Data Science', 'ar' => 'علوم البيانات'], 'description' => ['en' => 'Big data analysis and machine learning', 'ar' => 'تحليل البيانات الضخمة وتعلم الآلة']],
            ['name' => ['en' => 'UI/UX Design', 'ar' => 'تصميم واجهة المستخدم'], 'description' => ['en' => 'User interface and experience design', 'ar' => 'تصميم واجهة وتجربة المستخدم']],
        ];

        foreach ($majors as $major) {
            Major::create($major);
        }
    }
}
