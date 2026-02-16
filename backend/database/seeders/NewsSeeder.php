<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $newsItems = [
            [
                'title' => ['en' => 'Artikeys Launches New AI-Powered Learning Platform', 'ar' => 'أرتيكيز تطلق منصة تعلم جديدة مدعومة بالذكاء الاصطناعي'],
                'content' => ['en' => 'We are thrilled to announce the launch of our new AI-driven learning platform that adapts to each student\'s unique pace and learning style. The platform uses cutting-edge machine learning algorithms to personalize the educational experience.', 'ar' => 'يسعدنا الإعلان عن إطلاق منصتنا التعليمية الجديدة المدعومة بالذكاء الاصطناعي والتي تتكيف مع وتيرة كل طالب وأسلوب تعلمه الفريد. تستخدم المنصة خوارزميات تعلم الآلة المتطورة لتخصيص التجربة التعليمية.'],
                'published_at' => '2026-02-10',
            ],
            [
                'title' => ['en' => 'Partnership with Leading Tech Companies', 'ar' => 'شراكة مع شركات التكنولوجيا الرائدة'],
                'content' => ['en' => 'Artikeys has partnered with top technology firms to offer students real-world project experience and mentorship opportunities. Our students will gain hands-on experience working on industry-level projects.', 'ar' => 'عقدت أرتيكيز شراكات مع كبرى شركات التكنولوجيا لتقديم تجربة مشاريع واقعية وفرص إرشاد للطلاب. سيكتسب طلابنا خبرة عملية في العمل على مشاريع بمستوى الصناعة.'],
                'published_at' => '2026-02-05',
            ],
        ];

        foreach ($newsItems as $news) {
            News::create($news);
        }
    }
}
