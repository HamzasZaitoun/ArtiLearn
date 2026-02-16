import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <section class="py-12 lg:py-16 bg-alice-blue" aria-labelledby="hero-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white border border-[#E7EEF4] rounded-[24px] overflow-hidden relative min-h-[450px] lg:min-h-[550px] flex items-center">

          <!-- Hero Image (Left side in RTL = end) -->
          <div class="hidden lg:block absolute end-0 bottom-0 w-[420px] h-full">
            <img src="assets/images/student.png" alt="Student learning"
                 class="absolute bottom-0 end-0 w-full h-auto max-h-full object-contain">
          </div>

          <!-- Text Content (Right side in RTL = start) -->
          <div class="w-full lg:w-[60%] lg:me-auto p-8 lg:p-12 flex flex-col items-center lg:items-start text-center lg:text-start">
            <h1 id="hero-heading" class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.2] mb-5 text-[#043458] tracking-[-0.01em]">
              {{ 'HERO.TITLE' | translate }}
            </h1>
            <p class="text-lg lg:text-2xl leading-relaxed lg:leading-normal text-[#545F71] mb-8 max-w-[550px]">
              {{ 'HERO.SUBTITLE' | translate }}
            </p>
            <a routerLink="/"
               class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#09528A] to-[#043458] hover:opacity-95 text-[#F2F2F7] font-bold text-lg rounded-[14px] shadow-lg transition-all transform hover:scale-[1.02]"
               aria-label="Start your free trial">
              {{ 'HERO.CTA' | translate }}
            </a>
          </div>

          <!-- Slide Dots -->
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-[8px] px-2 py-2">
            <div class="w-[12px] h-[12px] rounded-full bg-[#043458]"></div>
            <div class="w-[8px] h-[8px] rounded-full bg-gray-400/50"></div>
            <div class="w-[8px] h-[8px] rounded-full bg-gray-400/50"></div>
            <div class="w-[8px] h-[8px] rounded-full bg-gray-400/50"></div>
            <div class="w-[8px] h-[8px] rounded-full bg-gray-400/50"></div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HomeHeroComponent { }
