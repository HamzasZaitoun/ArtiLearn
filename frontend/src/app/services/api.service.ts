import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppConstants } from '../core/constants/app.constants';
import { HomeResponse } from '../models/home-response.model';
import { Major } from '../models/major.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private readonly baseUrl = environment.apiUrl;
    private readonly http = inject(HttpClient);

    // ─── Home Page ──────────────────────────────────────
    getHomeData(): Observable<HomeResponse> {
        return this.http.get<HomeResponse>(`${this.baseUrl}${AppConstants.API_ENDPOINTS.HOME}`);
    }

    // ─── Majors ─────────────────────────────────────────
    getMajors(): Observable<Major[]> {
        // Backend returns generic array or wrapped? Usually generic array for this endpoint based on implementation
        // But let's assume raw array for now as per legacy code. 
        // If wrapped, we might need map(response => response.data).
        // Legacy code: return this.http.get(`${this.baseUrl}/majors`);
        return this.http.get<Major[]>(`${this.baseUrl}${AppConstants.API_ENDPOINTS.MAJORS}`);
    }

    // ─── Careers ────────────────────────────────────────
    submitCareerApplication(formData: FormData): Observable<any> {
        // Keeping any for response as strict type for submission response isn't critical yet, 
        // or defined as { message: string, data: ... }
        return this.http.post(`${this.baseUrl}${AppConstants.API_ENDPOINTS.CAREERS_APPLY}`, formData);
    }

    // ─── Health Check ───────────────────────────────────
    healthCheck(): Observable<any> {
        return this.http.get(`${this.baseUrl}${AppConstants.API_ENDPOINTS.HEALTH}`);
    }
}
