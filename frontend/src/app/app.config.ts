import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { TRANSLATIONS_EN, TRANSLATIONS_AR } from './i18n/translations';
import { languageInterceptor } from './interceptors/language.interceptor';

import { routes } from './app.routes';

class CustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(lang === 'ar' ? TRANSLATIONS_AR : TRANSLATIONS_EN);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([languageInterceptor])),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useClass: CustomLoader
        }
      })
    ),
  ],
};
