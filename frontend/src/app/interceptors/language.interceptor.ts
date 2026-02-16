import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

/**
 * Functional HTTP interceptor that attaches the current language
 * as an Accept-Language header to every outgoing API request.
 */
export const languageInterceptor: HttpInterceptorFn = (req, next) => {
    const languageService = inject(LanguageService);

    if (req.url.includes('/assets/') || req.url.includes('assets/') || req.url.endsWith('.json')) {
        return next(req);
    }

    const modifiedReq = req.clone({
        setHeaders: {
            'Accept-Language': languageService.currentLang(),
        },
    });

    return next(modifiedReq);
};
