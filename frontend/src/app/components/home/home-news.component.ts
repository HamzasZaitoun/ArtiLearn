import { Component, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NewsItem } from '../../models/news.model';

@Component({
  selector: 'app-home-news',
  standalone: true,
  imports: [CommonModule, TranslateModule, DatePipe],
  template: `
    <section class="py-16 md:py-20 bg-white" aria-labelledby="news-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 id="news-heading" class="text-3xl lg:text-5xl font-bold text-[#043458] leading-tight">
            {{ 'NEWS.TITLE' | translate }}
          </h2>
        </div>

        @if (loading()) {
            <div class="grid md:grid-cols-2 gap-6">
                <div class="h-[350px] bg-gray-100 rounded-[20px] animate-pulse"></div>
                <div class="h-[350px] bg-gray-100 rounded-[20px] animate-pulse"></div>
            </div>
        } @else {
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
               @for (item of news(); track item.id; let i = $index) {
                 <!-- News Card (Grid Style) -->
                 <div class="bg-white rounded-[20px] overflow-hidden border border-[#E7EEF4] hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                    <!-- Image -->
                    <div class="w-full h-[220px] overflow-hidden relative">
                       <!-- Using meeting.png for all news items as requested -->
                       <img [src]="'assets/images/meeting.png'" [alt]="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                       <div class="absolute top-4 start-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[#043458] text-xs font-bold shadow-sm">
                          {{ item.published_at | date:'dd.MM.yyyy' }}
                       </div>
                    </div>
                    <!-- Content -->
                    <div class="p-6 flex flex-col flex-grow">
                      <div class="mb-3">
                         <span class="text-[#1396FD] text-xs font-bold uppercase tracking-wider">
                            {{ 'NEWS.CATEGORY_EDUCATION' | translate }}
                         </span>
                      </div>
                      <h3 class="text-xl font-bold text-[#043458] mb-3 leading-snug group-hover:text-[#1396FD] transition-colors">{{ item.title }}</h3>
                      <p class="text-[#545F71] text-base leading-relaxed mb-4 line-clamp-3">
                        {{ item.content }}
                      </p>
                      <button class="flex items-center gap-2 text-[#043458] font-bold mt-auto text-sm group/btn transition-colors">
                         {{ 'NEWS.READ_MORE' | translate }}
                         <svg class="w-4 h-4 rtl:rotate-180 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                         </svg>
                      </button>
                    </div>
                 </div>
               }
            </div>
        }
      </div>
    </section>
  `
})
export class HomeNewsComponent {
  news = input.required<NewsItem[]>();
  loading = input<boolean>(false);
}
