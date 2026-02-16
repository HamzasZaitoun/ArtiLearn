import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Level } from '../../models/level.model';
import { LanguageService } from '../../services/language.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home-levels',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="py-16 bg-alice-blue" aria-labelledby="levels-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 id="levels-heading" class="text-3xl lg:text-5xl font-bold text-[#043458] leading-tight mb-4">
            {{ 'LEVELS.TITLE' | translate }}
          </h2>
          <p class="text-[#545F71] font-bold text-lg lg:text-xl max-w-2xl mx-auto">
            {{ 'LEVELS.SUBTITLE' | translate }}
          </p>
        </div>

        <div [class]="'flex flex-col md:flex-row gap-8 justify-center items-center ' + (isRtl() ? 'md:flex-row-reverse' : '')">
          @for (level of levels(); track level.id; let i = $index) {
            <div class="group w-full md:w-[340px] hover:-translate-y-2 transition-transform duration-500">
              <!-- Card Image -->
              <div class="w-full h-[280px] overflow-hidden rounded-t-[14px]">
                <img [src]="level.image"
                      [alt]="level.name"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              </div>
              <!-- Card Label -->
              <div class="w-full py-4 bg-white rounded-b-[14px] flex items-center justify-center border-x border-b border-gray-100">
                <h3 class="text-xl font-bold text-[#043458]">{{ level.name }}</h3>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class HomeLevelsComponent {
  private languageService = inject(LanguageService);
  isRtl = this.languageService.isRtl;

  levels = computed(() => {
    const isAr = this.isRtl();
    return [
      {
        id: 1,
        name: isAr ? 'المرحلة الثانوية' : 'High School',
        image: 'assets/images/level-high.png'
      },
      {
        id: 2,
        name: isAr ? 'المرحلة الإعدادية' : 'Middle School',
        image: 'assets/images/level-middle.png'
      },
      {
        id: 3,
        name: isAr ? 'المرحلة الابتدائية' : 'Primary School',
        image: 'assets/images/level-primary.png'
      }
    ];
  });
}
