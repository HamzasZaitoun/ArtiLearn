import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-careers-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="bg-[#031F34] overflow-hidden relative" aria-labelledby="careers-hero-heading">
      <!-- Background Logo Overlay -->
      <div class="absolute inset-0 pointer-events-none opacity-[0.08]" aria-hidden="true">
        <div class="absolute -left-[467px] -top-[364px] w-[1183px] h-[1205px] -rotate-[35deg]">
          <div class="absolute inset-0 bg-[#084979]/25 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div class="flex flex-col lg:flex-row items-center gap-10 min-h-[400px] rounded-[48px]">
            <!-- Text Content (Start aligned after fix) -->
            <div class="lg:w-1/2 text-center lg:text-start">
                 <h1 id="careers-hero-heading" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F2F7] mb-6 leading-tight">
                     {{ 'CAREERS.HERO.TITLE' | translate }}
                 </h1>
                 <p class="text-[#F2F2F7] text-lg lg:text-2xl leading-relaxed lg:leading-normal max-w-[600px]">
                     {{ 'CAREERS.HERO.TEXT' | translate }}
                 </p>
            </div>
        </div>
      </div>
    </section>
  `
})
export class CareersHeroComponent { }
