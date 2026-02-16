import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-careers-contact-info',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    template: `
    <div class="lg:w-auto flex flex-col lg:pt-0">
         <h2 class="text-3xl lg:text-[48px] font-bold text-[#043458] leading-[58px] mb-4">
            {{ 'CAREERS.CONTACT.TITLE' | translate }}
         </h2>

         <div class="space-y-6 w-full mt-4">
            <!-- Email -->
            <div class="flex items-center gap-3 group">
                <svg class="w-6 h-[18px] text-[#1396FD] flex-shrink-0" fill="currentColor" viewBox="0 0 24 18">
                  <rect x="0" y="0" width="24" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                  <path d="M2 2l10 7 10-7" fill="none" stroke="currentColor" stroke-width="2"/>
                </svg>
                <span class="text-[#545F71] font-medium text-[26px] leading-[22px]">{{ 'FOOTER.EMAIL' | translate }}</span>
            </div>
             <!-- Phone -->
            <div class="flex items-center gap-3 group">
                 <svg class="w-6 h-6 text-[#1396FD] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                 </svg>
                 <span class="text-[#545F71] font-medium text-[26px] leading-[22px]" dir="ltr">{{ 'FOOTER.PHONE' | translate }}</span>
            </div>
            <!-- Location -->
             <div class="flex items-center gap-3 group">
                 <svg class="w-6 h-6 text-[#1396FD] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                 </svg>
                 <span class="text-[#545F71] font-medium text-[26px] leading-[22px]">{{ 'CAREERS.CONTACT.LOCATION' | translate }}</span>
            </div>
             <!-- Hours -->
             <div class="flex items-center gap-3 group">
                 <svg class="w-6 h-6 text-[#1396FD] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                 </svg>
                 <span class="text-[#545F71] font-medium text-[26px] leading-[22px]">{{ 'CAREERS.CONTACT.HOURS' | translate }}</span>
            </div>
            <!-- Map Link -->
             <div class="flex items-center gap-3 group">
                 <svg class="w-6 h-6 text-[#1396FD] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
                 </svg>
                 <span class="text-[#043458] text-[26px] leading-[31px]">{{ 'CAREERS.CONTACT.MAP_LABEL' | translate }}</span>
                 <a href="#" class="text-[#545F71] font-medium text-[26px] leading-[22px] hover:underline">{{ 'CAREERS.CONTACT.CLICK_HERE' | translate }}</a>
            </div>
         </div>
    </div>
  `
})
export class CareersContactInfoComponent { }
