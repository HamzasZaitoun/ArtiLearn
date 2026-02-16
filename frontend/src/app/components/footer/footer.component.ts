import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
   selector: 'app-footer',
   standalone: true,
   imports: [RouterLink, TranslateModule],
   template: `
    <footer class="bg-[#043458] rounded-t-[48px] pt-20 pb-10 mt-20 relative overflow-hidden text-white" role="contentinfo">

      <!-- Decorative Overlay -->
      <div class="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
         <svg width="600" height="600" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
         </svg>
      </div>

      <div class="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          <!-- Right Column: Brand & Social -->
          <div class="lg:col-span-4 space-y-8 text-center lg:text-end rtl:lg:text-start order-1 lg:order-2">
             <div class="flex items-center justify-center lg:justify-end gap-3">
               <div class="flex flex-col items-end">
                  <span class="font-bold text-2xl leading-none">ArtiLearn</span>
                  <span class="text-white/60 text-xs">Education Platform</span>
               </div>
               <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#043458]">
                  <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
               </div>
             </div>

             <p class="text-white text-lg leading-relaxed max-w-sm ms-auto rtl:me-auto rtl:ms-0 text-end rtl:text-start">
               {{ 'FOOTER.DESCRIPTION' | translate }}
             </p>

             <div class="space-y-4">
               <h3 class="text-[#FD9A33] font-bold text-lg text-end rtl:text-start">{{ 'FOOTER.SOCIAL_HEADING' | translate }}</h3>
               <div class="flex gap-4 justify-center lg:justify-end">
                  <a href="#" class="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-[#FD9A33] hover:border-[#FD9A33] transition-all duration-300" aria-label="YouTube">
                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  </a>
                  <a href="#" class="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-[#FD9A33] hover:border-[#FD9A33] transition-all duration-300" aria-label="Instagram">
                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" class="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-[#FD9A33] hover:border-[#FD9A33] transition-all duration-300" aria-label="Facebook">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  </a>
               </div>
             </div>
          </div>

          <!-- Left Columns: Links -->
          <div class="lg:col-span-8 flex flex-col md:flex-row justify-around gap-12 text-center md:text-end rtl:md:text-start order-2 lg:order-1">
             <!-- Links 1 -->
             <div>
                <h3 class="text-[#FD9A33] font-bold text-xl mb-6">{{ 'FOOTER.LINKS_HEADING' | translate }}</h3>
                <ul class="space-y-4">
                  <li><a routerLink="/" class="text-white hover:text-[#FD9A33] transition-colors text-lg">{{ 'NAV.HOME' | translate }}</a></li>
                  <li><a href="#" class="text-white hover:text-[#FD9A33] transition-colors text-lg">{{ 'FOOTER.MATERIALS' | translate }}</a></li>
                  <li><a href="#" class="text-white hover:text-[#FD9A33] transition-colors text-lg">{{ 'FOOTER.TEACHERS_LINK' | translate }}</a></li>
                  <li><a href="#" class="text-white hover:text-[#FD9A33] transition-colors text-lg">{{ 'FOOTER.ABOUT_LINK' | translate }}</a></li>
                </ul>
             </div>

             <!-- Links 2 -->
             <div>
                <h3 class="text-[#FD9A33] font-bold text-xl mb-6">{{ 'FOOTER.SUPPORT' | translate }}</h3>
                <ul class="space-y-4">
                  <li><a routerLink="/careers" class="text-white hover:text-[#FD9A33] transition-colors text-lg">{{ 'NAV.CONTACT' | translate }}</a></li>
                  <li><a href="#" class="text-white hover:text-[#FD9A33] transition-colors text-lg">{{ 'FOOTER.HOW_TO_USE' | translate }}</a></li>
                  <li><a href="#" class="text-white hover:text-[#FD9A33] transition-colors text-lg">{{ 'FOOTER.CANCEL_POLICY' | translate }}</a></li>
                  <li><a href="#" class="text-white hover:text-[#FD9A33] transition-colors text-lg">{{ 'FOOTER.FAQ' | translate }}</a></li>
                </ul>
             </div>
          </div>

        </div>

        <!-- Divider -->
        <div class="h-px w-full bg-white/20 mb-8"></div>

        <!-- Bottom Bar -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">

           <div class="flex gap-4 order-2 md:order-1">
              <span class="text-sm font-medium">{{ 'FOOTER.RIGHTS' | translate }}</span>
           </div>

           <div class="flex items-center gap-6 order-1 md:order-2">
              <a href="#" class="text-white hover:text-[#FD9A33] underline transition-colors">{{ 'FOOTER.TERMS' | translate }}</a>
              <a href="#" class="text-white hover:text-[#FD9A33] underline transition-colors">{{ 'FOOTER.PRIVACY' | translate }}</a>
           </div>

           <div class="flex gap-3 order-3">
              <img src="assets/images/visa.png" alt="Visa" class="h-8 brightness-0 invert opacity-80">
              <div class="h-8 w-12 bg-white/10 rounded flex items-center justify-center opacity-80">
                 <div class="flex -space-x-2">
                    <div class="w-4 h-4 rounded-full bg-white/50"></div>
                    <div class="w-4 h-4 rounded-full bg-white/50"></div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent { }
