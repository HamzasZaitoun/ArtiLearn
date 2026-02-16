import { Component, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Testimonial } from '../../models/testimonial.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home-testimonials',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <section class="py-16 md:py-20 relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-[#043458]/10 rounded-[24px] py-12 lg:py-16 px-6 lg:px-12">
          <div class="text-center mb-10">
            <h2 id="testimonials-heading" class="text-3xl lg:text-5xl font-bold text-[#043458] leading-tight mb-4">
              {{ 'TESTIMONIALS.TITLE' | translate }}
            </h2>
            <p class="text-[#043458] font-bold text-lg lg:text-xl">
              {{ 'TESTIMONIALS.SUBTITLE' | translate }}
            </p>
          </div>

          @if (loading()) {
            <div class="grid md:grid-cols-3 gap-6">
              <div class="h-[300px] bg-white/50 rounded-[16px] animate-pulse"></div>
              <div class="h-[300px] bg-white/50 rounded-[16px] animate-pulse"></div>
              <div class="h-[300px] bg-white/50 rounded-[16px] animate-pulse"></div>
            </div>
          } @else if (testimonials().length > 0) {
             <div [class]="'flex flex-col lg:flex-row justify-center gap-6 mb-4 ' + (isRtl() ? 'lg:flex-row-reverse' : '')">
                @for (t of testimonials(); track t.id; let i = $index) {
                   <div class="bg-white p-6 rounded-[16px] shadow-[0_8px_16px_rgba(84,95,113,0.1)] flex flex-col flex-1 max-w-[360px] mx-auto lg:mx-0 min-h-[320px]">
                      <!-- Colored Quote Icon -->
                      <div class="mb-4">
                        <svg class="w-12 h-10 rotate-180" [style.color]="getQuoteColor(i)" fill="currentColor" viewBox="0 0 64 58" aria-hidden="true">
                          <path d="M0 36.75V0h26.67v36.75c0 11.73-7.67 19.67-18.44 21.8L6.18 54.13c5-1.88 8.21-7.48 8.21-12.02H0zm37.33 0V0H64v36.75c0 11.73-7.67 19.67-18.44 21.8l-2.05-4.42c5-1.88 8.21-7.48 8.21-12.02H37.33z"/>
                        </svg>
                      </div>

                      <!-- Content -->
                      <p class="text-black text-lg leading-relaxed mb-6 flex-grow">{{ t.content }}</p>

                      <!-- Author -->
                      <footer class="flex items-end justify-start gap-3 mt-auto flex-row-reverse">
                         <div class="flex flex-col items-end gap-0.5 flex-1">
                            <cite class="text-[#545F71] text-lg font-bold not-italic block w-full">{{ t.author_name }}</cite>
                            <span class="text-[#545F71] text-base block w-full">Student</span>
                         </div>
                         <div class="w-14 h-14 rounded-[12px] overflow-hidden bg-gray-100 flex-shrink-0">
                            <!-- Using generic avatar logic if no image -->
                            <img [src]="getAuthorImage(i)" [alt]="t.author_name" class="w-full h-full object-cover">
                         </div>
                      </footer>
                   </div>
                }
             </div>

             <!-- Slide Navigation -->
             <div class="flex items-center justify-center gap-2 mt-6">
               <button class="p-2 text-gray-400 hover:text-[#043458] transition-colors" aria-label="Previous">
                 <svg class="w-6 h-6 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
               </button>
               <div class="flex items-center gap-[8px] px-2">
                 <div class="w-3 h-3 rounded-full bg-gradient-to-r from-[#09528A] to-[#043458]"></div>
                 <div class="w-2.5 h-2.5 rounded-full bg-white opacity-70"></div>
                 <div class="w-2.5 h-2.5 rounded-full bg-white opacity-70"></div>
                 <div class="w-2.5 h-2.5 rounded-full bg-white opacity-70"></div>
                 <div class="w-2.5 h-2.5 rounded-full bg-white opacity-70"></div>
               </div>
               <button class="p-2 text-white hover:text-[#043458] transition-colors" aria-label="Next">
                 <svg class="w-6 h-6 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
               </button>
             </div>
          }

          <!-- CTA Button -->
          <div class="flex justify-center mt-10">
            <a routerLink="/"
               class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#09528A] to-[#043458] hover:opacity-95 text-[#F2F2F7] font-bold text-lg rounded-[14px] shadow-xl transition-all transform hover:scale-[1.02]"
               aria-label="Start your free trial">
              {{ 'HERO.CTA' | translate }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeTestimonialsComponent {
  testimonials = input.required<Testimonial[]>();
  loading = input<boolean>(false);

  private languageService = inject(LanguageService);
  isRtl = this.languageService.isRtl;

  getQuoteColor(index: number): string {
    const colors = ['#FD9A33', '#1396FD', '#66D86E']; // Orange, Blue, Green
    return colors[index % colors.length];
  }

  getAuthorImage(index: number): string {
    // Fallback or specific logic
    const images = [
      'assets/images/level-high.png', // Temporary placeholder if t.author_image is missing or relative
      'assets/images/level-middle.png'
    ];
    return images[index % images.length];
  }
}
