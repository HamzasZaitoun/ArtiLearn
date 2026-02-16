<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $testimonials = [
            [
                'author_name' => ['en' => 'Sarah Ahmad', 'ar' => 'سارة أحمد'],
                'content' => ['en' => 'Artikeys completely transformed my career. The hands-on projects and mentorship prepared me for a senior developer role within months of graduating.', 'ar' => 'غيّرت أرتيكيز مسيرتي المهنية تمامًا. المشاريع العملية والإرشاد أعدّاني لدور مطور أول في غضون أشهر من التخرج.'],
                'rating' => 5,
                'author_image' => 'images/testimonials/levelprimarysmall.png',
            ],
            [
                'author_name' => ['en' => 'Mohammed Al-Rashid', 'ar' => 'محمد الراشد'],
                'content' => ['en' => 'The bilingual approach at Artikeys is outstanding. Being able to learn complex technical concepts in both Arabic and English gave me a competitive edge.', 'ar' => 'النهج ثنائي اللغة في أرتيكيز متميز. القدرة على تعلم المفاهيم التقنية المعقدة بالعربية والإنجليزية منحتني ميزة تنافسية.'],
                'rating' => 5,
                'author_image' => 'images/testimonials/levelmiddlesmall.png',
            ],
            [
                'author_name' => ['en' => 'Layla Hussein', 'ar' => 'ليلى حسين'],
                'content' => ['en' => 'The curriculum is modern and industry-relevant. I landed my dream job as a UX Designer three weeks after completing the program. Highly recommended!', 'ar' => 'المنهج حديث وذو صلة بالصناعة. حصلت على وظيفة أحلامي كمصممة تجربة مستخدم بعد ثلاثة أسابيع من إكمال البرنامج. أنصح بها بشدة!'],
                'rating' => 5,
                'author_image' => 'images/testimonials/levelhighsmall.png',
            ],

        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}
