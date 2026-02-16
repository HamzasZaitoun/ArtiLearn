import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-[20px] shadow-sm transition-all duration-300" role="navigation" aria-label="Main navigation">
      <div class="max-w-[1440px] mx-auto px-[50px]">
        <div class="flex items-center justify-between h-[97px]">

          <!-- Logo (first in DOM → RIGHT in RTL) -->
          <a routerLink="/" class="flex items-center" aria-label="ArtiLearn Home">
            <img src="assets/images/logo.png" alt="ArtiLearn Logo" class="h-[73px] w-auto object-contain"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <!-- Fallback if no logo image -->
            <div class="hidden items-center gap-1.5">
              <div class="w-9 h-9 bg-[#1396FD] rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
              <span class="text-[#043458] font-bold text-xl tracking-tight">ArtiLearn</span>
            </div>
          </a>

          <!-- Center: Nav Links -->
          <div class="hidden lg:flex items-center gap-[9px]">
            <a routerLink="/" routerLinkActive="!text-[#1396FD]" [routerLinkActiveOptions]="{ exact: true }" class="text-[#043458] hover:text-[#1396FD] font-bold text-lg transition-colors px-[10px] py-[10px]" aria-label="Home page">
              {{ 'NAV.HOME' | translate }}
            </a>
            <a href="#" class="text-[#043458] hover:text-[#1396FD] font-bold text-lg transition-colors px-[10px] py-[10px]" aria-label="Subjects">
              {{ 'NAV.SUBJECTS' | translate }}
            </a>
            <a href="#" class="text-[#043458] hover:text-[#1396FD] font-bold text-lg transition-colors px-[10px] py-[10px]" aria-label="Teachers">
              {{ 'NAV.TEACHERS' | translate }}
            </a>
            <a href="#" class="text-[#043458] hover:text-[#1396FD] font-bold text-lg transition-colors px-[10px] py-[10px]" aria-label="About us">
              {{ 'NAV.ABOUT' | translate }}
            </a>
            <a routerLink="/careers" routerLinkActive="!text-[#1396FD]" class="text-[#043458] hover:text-[#1396FD] font-bold text-lg transition-colors px-[10px] py-[10px]" aria-label="Contact us">
              {{ 'NAV.CONTACT' | translate }}
            </a>
          </div>

          <!-- Actions (last in DOM → LEFT in RTL) -->
          <div class="hidden md:flex items-center gap-6">
            <!-- Register CTA -->
            <a href="#" class="px-4 py-[9px] bg-[#FD9A33] hover:bg-[#e88b2b] text-[#FFFAF4] font-bold text-lg rounded-[30px] transition-all shadow-lg" aria-label="Register">
              {{ 'NAV.REGISTER' | translate }}
            </a>

            <!-- Login -->
            <a href="#" class="text-[#043458] hover:text-[#1396FD] font-bold text-base transition-colors rounded-[30px] py-5" aria-label="Login">
              {{ 'NAV.LOGIN' | translate }}
            </a>

            <!-- Language Toggle -->
            <button (click)="langService.toggleLanguage()"
                    class="text-[#043458] hover:text-[#1396FD] font-bold text-base transition-colors rounded-[30px] py-5"
                    aria-label="Toggle language">
              {{ 'NAV.LANGUAGE' | translate }}
            </button>
          </div>

          <!-- Mobile Menu Toggle -->
          <button (click)="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2 text-[#043458]" aria-label="Toggle mobile menu" [attr.aria-expanded]="mobileMenuOpen">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        @if (mobileMenuOpen) {
          <div class="lg:hidden pb-6 border-t border-gray-100 mt-2 pt-4 animate-fade-in bg-white rounded-b-2xl shadow-xl absolute left-0 right-0 px-4 z-50" role="menu">
             <div class="flex flex-col gap-4">
                <a routerLink="/" (click)="mobileMenuOpen = false" class="block text-[#043458] font-bold text-lg text-end rtl:text-start" role="menuitem">{{ 'NAV.HOME' | translate }}</a>
                <a href="#" class="block text-[#043458] font-bold text-lg text-end rtl:text-start" role="menuitem">{{ 'NAV.SUBJECTS' | translate }}</a>
                <a href="#" class="block text-[#043458] font-bold text-lg text-end rtl:text-start" role="menuitem">{{ 'NAV.TEACHERS' | translate }}</a>
                <a href="#" class="block text-[#043458] font-bold text-lg text-end rtl:text-start" role="menuitem">{{ 'NAV.ABOUT' | translate }}</a>
                <a routerLink="/careers" (click)="mobileMenuOpen = false" class="block text-[#043458] font-bold text-lg text-end rtl:text-start" role="menuitem">{{ 'NAV.CONTACT' | translate }}</a>
                <hr class="border-gray-100" aria-hidden="true">
                <button (click)="langService.toggleLanguage(); mobileMenuOpen = false" class="block text-[#043458] font-bold text-start rtl:text-end" role="menuitem" aria-label="Toggle language">{{ 'NAV.LANGUAGE' | translate }}</button>
                <a href="#" class="block text-[#043458] font-bold text-end rtl:text-start" role="menuitem">{{ 'NAV.LOGIN' | translate }}</a>
                <a href="#" class="block text-center py-3 bg-[#FD9A33] text-[#FFFAF4] font-bold rounded-[30px]" role="menuitem">{{ 'NAV.REGISTER' | translate }}</a>
             </div>
          </div>
        }
      </div>
    </nav>

    <!-- Spacer -->
    <div class="h-[97px]" aria-hidden="true"></div>
  `,
})
export class NavbarComponent {
  langService = inject(LanguageService);
  mobileMenuOpen = false;
}
