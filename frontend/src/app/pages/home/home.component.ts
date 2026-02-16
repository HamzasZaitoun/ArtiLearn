import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LanguageService } from '../../services/language.service';
import { Level } from '../../models/level.model';
import { Testimonial } from '../../models/testimonial.model';
import { NewsItem } from '../../models/news.model';
import { HomeHeroComponent } from '../../components/home/home-hero.component';
import { HomeLevelsComponent } from '../../components/home/home-levels.component';
import { HomeTestimonialsComponent } from '../../components/home/home-testimonials.component';
import { HomePartnersComponent } from '../../components/home/home-partners.component';
import { HomeNewsComponent } from '../../components/home/home-news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    HomeHeroComponent,
    HomeLevelsComponent,
    HomeTestimonialsComponent,
    HomePartnersComponent,
    HomeNewsComponent
  ],
  template: `
    <!-- ═══ Hero Section ═══ -->
    <app-home-hero />

    <!-- ═══ Academic Levels ═══ -->
    <app-home-levels />

    <!-- ═══ Testimonials ═══ -->
    <app-home-testimonials [testimonials]="testimonials()" [loading]="loading()" />

    <!-- ═══ Partners ═══ -->
    <app-home-partners />

    <!-- ═══ Latest News ═══ -->
    <app-home-news [news]="news()" [loading]="loading()" />
  `
})
export class HomeComponent implements OnInit {
  private apiService = inject(ApiService);
  private languageService = inject(LanguageService);

  // Signals for Reactive State
  loading = signal<boolean>(true);
  levels = signal<Level[]>([]);
  testimonials = signal<Testimonial[]>([]);
  news = signal<NewsItem[]>([]);

  isRtl = this.languageService.isRtl;

  ngOnInit() {
    this.fetchHomeData();
  }

  private fetchHomeData() {
    this.apiService.getHomeData().subscribe({
      next: (data) => {
        // Backend returns object with keys, ensuring array fallback
        this.testimonials.set(data.testimonials || []);
        this.news.set(data.news || []);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching home data', err);
        this.loading.set(false);
      }
    });
  }
}
