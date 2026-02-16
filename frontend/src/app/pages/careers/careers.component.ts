import { Component, signal, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../services/api.service';
import { LanguageService } from '../../services/language.service';
import { Major } from '../../models/major.model';
import { CareersHeroComponent } from '../../components/careers/careers-hero.component';
import { CareersContactInfoComponent } from '../../components/careers/careers-contact-info.component';
import { CareersFormComponent } from '../../components/careers/careers-form.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    CareersHeroComponent,
    CareersContactInfoComponent,
    CareersFormComponent
  ],
  template: `
    <!-- ═══ Careers Hero ═══ -->
    <app-careers-hero />

    <!-- ═══ Main Content (Form & Contact) ═══ -->
    <section class="relative bg-alice-blue py-12 lg:py-[48px]" aria-labelledby="careers-form-heading">
      <!-- Background Logo Overlay -->
      <div class="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true">
        <div class="absolute right-[639px] -top-[162px] w-[1014px] h-[1007px] -rotate-[34deg]">
          <div class="absolute inset-0 bg-[#043458]/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start py-12 lg:py-16">

            <!-- Column 1: Contact Info (Right in RTL) -->
            <app-careers-contact-info />

            <!-- Column 2: Form (Left in RTL) -->
            <app-careers-form [majors]="majors()" />

        </div>
      </div>
    </section>
  `
})
export class CareersComponent {
  private apiService = inject(ApiService);
  private langService = inject(LanguageService);

  majors = signal<Major[]>([]);

  constructor() {
    // Re-fetch majors whenever the language changes to ensure correct names if localized
    effect(() => {
      // Trigger dependency on signal
      this.langService.currentLang();
      // Fetch
      this.fetchMajors();
    }, { allowSignalWrites: true });
  }

  private fetchMajors() {
    this.apiService.getMajors().subscribe({
      next: (data) => {
        // Handle if data is wrapped or array
        // ApiService now typed as Major[], but runtime might benefit from check
        const list = Array.isArray(data) ? data : (data as any).data || [];
        this.majors.set(list);
      },
      error: (err) => console.error('Error fetching majors', err)
    });
  }
}
