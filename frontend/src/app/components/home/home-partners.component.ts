import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-home-partners',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    template: `
    <section class="py-[100px] bg-white" aria-labelledby="partners-heading">
      <div class="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-20 text-center">
        <h2 id="partners-heading" class="text-3xl lg:text-[48px] font-bold text-[#043458] leading-[58px] mb-14">
          {{ 'PARTNERS.TITLE' | translate }}
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          @for (i of [1,2,3,4,5,6]; track i) {
            <div class="flex flex-col items-center gap-6 group">
              <div class="w-[102px] h-[132px] flex items-center justify-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500">
                <!-- Placeholder Logo SVG -->
                <svg class="w-16 h-16" viewBox="0 0 100 132" fill="none">
                  <path d="M27 40L35 55L27 70" stroke="#FD9A33" stroke-width="4" fill="none"/>
                  <path d="M73 40L65 55L73 70" stroke="#FD9A33" stroke-width="4" fill="none"/>
                  <path d="M27 27L44 40L27 53" stroke="#66D86E" stroke-width="4" fill="none"/>
                  <path d="M73 27L56 40L73 53" stroke="#66D86E" stroke-width="4" fill="none"/>
                  <path d="M27 13L50 30L73 13" stroke="#1396FD" stroke-width="4" fill="none"/>
                  <circle cx="50" cy="5" r="4" fill="#1396FD"/>
                </svg>
              </div>
              <span class="font-bold text-[#545F71] text-lg text-center">{{ 'PARTNERS.PARTNER_NAME' | translate }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class HomePartnersComponent { }
