import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en' | 'ar';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    /** Reactive signal for the current language */
    currentLang = signal<Language>('en');

    /** Reactive signal for RTL state */
    isRtl = signal<boolean>(false);

    constructor(private translate: TranslateService) {
        // Restore saved language or default to English
        const saved = (localStorage.getItem('artilearn-lang') as Language) || 'en';
        this.setLanguage(saved);
    }

    /**
     * Switch between English and Arabic.
     * Updates the HTML dir attribute, body font, and localStorage.
     */
    toggleLanguage(): void {
        const newLang: Language = this.currentLang() === 'en' ? 'ar' : 'en';
        this.setLanguage(newLang);
    }

    /**
     * Set a specific language.
     */
    setLanguage(lang: Language): void {
        this.currentLang.set(lang);
        this.isRtl.set(lang === 'ar');
        this.translate.use(lang);

        // Update HTML element attributes
        const html = document.documentElement;
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        html.setAttribute('lang', lang);

        // Persist preference
        localStorage.setItem('artilearn-lang', lang);
    }
}
