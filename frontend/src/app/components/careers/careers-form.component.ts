import { Component, input, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../services/api.service';
import { Major } from '../../models/major.model';

@Component({
    selector: 'app-careers-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslateModule],
    template: `
    <div class="lg:flex-1 w-full bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-[#E7EEF4]">
         <div class="mb-8">
           <h2 id="careers-form-heading" class="text-3xl lg:text-[32px] font-bold text-[#043458] mb-2">
             {{ 'CAREERS.FORM.TITLE' | translate }}
           </h2>
           <span class="text-[#545F71] text-sm font-normal">{{ 'CAREERS.FORM.REQUIRED_HINT' | translate }}</span>
         </div>

         @if (submitted()) {
             <div class="bg-green-50 rounded-[24px] p-8 text-center border border-green-100 shadow-sm animate-fade-in">
                 <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                     <svg class="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                     </svg>
                 </div>
                 <h3 class="text-2xl font-bold text-[#043458] mb-3">{{ 'CAREERS.SUCCESS.TITLE' | translate }}</h3>
                 <p class="text-[#545F71] text-lg">{{ 'CAREERS.SUCCESS.MESSAGE' | translate }}</p>
                 <button (click)="resetForm()" class="mt-8 px-8 py-3 bg-[#043458] text-white rounded-[12px] font-bold hover:bg-[#09528A] transition-colors">
                     {{ 'CAREERS.SUCCESS.BUTTON' | translate }}
                 </button>
             </div>
         } @else {
             <form [formGroup]="careerForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-6" aria-labelledby="careers-form-heading">

                 <!-- Row 1: Job Type (Full Width) -->
                 <div>
                     <label for="job_type" class="block text-[#043458] font-medium text-lg mb-2">{{ 'CAREERS.FORM.JOB_LABEL' | translate }}</label>
                     <select id="job_type" formControlName="job_type" class="w-full px-5 py-3 bg-white border border-[#BCC2CB] rounded-[16px] text-[#043458] font-medium text-lg focus:ring-2 focus:ring-[#1396FD]/20 focus:border-[#1396FD] outline-none transition-all appearance-none cursor-pointer">
                          <option value="teacher">{{ 'CAREERS.FORM.JOB_TEACHER' | translate }}</option>
                          <option value="content_creator">{{ 'CAREERS.FORM.JOB_CREATOR' | translate }}</option>
                     </select>
                 </div>

                 <!-- Row 2: Specialization & Years of Experience -->
                 <div class="flex flex-col md:flex-row gap-6">
                      <!-- Specialization (Major) -->
                      <div class="flex-1">
                          <label for="major_id" class="block text-[#043458] font-medium text-lg mb-2">{{ 'CAREERS.FORM.SPECIALIZATION_LABEL' | translate }}</label>
                          <select id="major_id" formControlName="major_id" class="w-full px-5 py-3 bg-white border border-[#BCC2CB] rounded-[16px] text-[#888D91] font-medium text-lg focus:ring-2 focus:ring-[#1396FD]/20 focus:border-[#1396FD] outline-none transition-all appearance-none cursor-pointer"
                                  [class.text-black]="careerForm.get('major_id')?.value">
                              <option value="" disabled selected>{{ 'CAREERS.FORM.SPECIALIZATION_PLACEHOLDER' | translate }}</option>
                              @for (major of majors(); track major.id) {
                                  <option [value]="major.id">{{ major.name }}</option>
                              }
                          </select>
                      </div>

                      <!-- Years of Experience (Select) -->
                      <div class="flex-1">
                         <label for="years" class="block text-[#043458] font-medium text-lg mb-2">{{ 'CAREERS.FORM.EXPERIENCE_LABEL' | translate }}</label>
                         <select id="years" formControlName="years_of_experience" class="w-full px-5 py-3 bg-white border border-[#BCC2CB] rounded-[16px] text-[#888D91] font-medium text-lg focus:ring-2 focus:ring-[#1396FD]/20 focus:border-[#1396FD] outline-none transition-all appearance-none cursor-pointer"
                                 [class.text-black]="careerForm.get('years_of_experience')?.value">
                              <option [ngValue]="null" disabled selected>{{ 'CAREERS.FORM.EXPERIENCE_PLACEHOLDER' | translate }}</option>
                              @for (year of experienceOptions; track year) {
                                  <option [value]="year">{{ year }}</option>
                              }
                              <option [value]="11">10+</option>
                         </select>
                      </div>
                 </div>

                 <!-- Row 3: Name -->
                 <div>
                     <label for="name" class="block text-[#043458] font-medium text-lg mb-2">{{ 'CAREERS.FORM.NAME_LABEL' | translate }}</label>
                     <input id="name" type="text" formControlName="name" class="w-full px-5 py-3 bg-white border border-[#BCC2CB] rounded-[16px] text-[#043458] font-medium text-lg placeholder:text-[#888D91] focus:ring-2 focus:ring-[#1396FD]/20 focus:border-[#1396FD] outline-none transition-all"
                            [placeholder]="'CAREERS.FORM.NAME_PLACEHOLDER' | translate">
                 </div>

                 <!-- Row 4: Phone (With Country Code Mock) -->
                 <div>
                     <label for="phone" class="block text-[#043458] font-medium text-lg mb-2">{{ 'CAREERS.FORM.PHONE_LABEL' | translate }}</label>
                     <div class="relative">
                        <!-- Country Code (Static for now based on design) -->
                        <div class="absolute top-1/2 -translate-y-1/2 start-4 flex items-center gap-2 border-e border-[#BCC2CB] pe-3 h-[60%] z-10">
                            <!-- Flag Mock (Qatar/Jordan/Generic) -->
                            <img src="assets/images/jordan-flag-icon.png" class="w-6 h-auto" onerror="this.style.display='none'" alt="Flag"> 
                            <span class="text-[#043458] font-bold text-lg" dir="ltr">+962</span>
                        </div>
                        <input id="phone" type="tel" formControlName="phone" class="w-full ps-[110px] px-5 py-3 bg-white border border-[#BCC2CB] rounded-[16px] text-[#043458] font-medium text-lg placeholder:text-[#888D91] focus:ring-2 focus:ring-[#1396FD]/20 focus:border-[#1396FD] outline-none transition-all text-start"
                               placeholder="79 000 0000" dir="ltr">
                     </div>
                 </div>

                 <!-- Row 5: Email -->
                 <div>
                     <label for="email" class="block text-[#043458] font-medium text-lg mb-2">{{ 'CAREERS.FORM.EMAIL_LABEL' | translate }}</label>
                     <input id="email" type="email" formControlName="email" class="w-full px-5 py-3 bg-white border border-[#BCC2CB] rounded-[16px] text-[#043458] font-medium text-lg placeholder:text-[#888D91] focus:ring-2 focus:ring-[#1396FD]/20 focus:border-[#1396FD] outline-none transition-all"
                            [placeholder]="'CAREERS.FORM.EMAIL_PLACEHOLDER' | translate">
                 </div>

                 <!-- Row 6: CV Upload -->
                 <div>
                     <label class="block text-[#043458] font-medium text-lg mb-2">{{ 'CAREERS.FORM.CV_LABEL' | translate }}</label>
                     <div class="w-full border border-[#BCC2CB] rounded-[16px] px-5 py-3 flex items-center justify-between cursor-pointer hover:border-[#1396FD] transition-colors bg-white group/upload"
                          (click)="cvInput.click()" role="button" tabindex="0" aria-label="Upload CV file" (keydown.enter)="cvInput.click()">

                          <span class="text-[#888D91] font-medium text-lg group-hover/upload:text-[#043458] transition-colors truncate max-w-[80%]">
                              {{ selectedFileName() || ('CAREERS.FORM.UPLOAD_BUTTON' | translate) }}
                          </span>
                          
                          <div class="flex items-center gap-3">
                              <!-- Upload Icon -->
                              <svg class="w-6 h-6 text-[#778D9D] group-hover/upload:text-[#1396FD] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                              </svg>
                          </div>

                          <input #cvInput type="file" accept=".pdf,.docx" class="hidden" (change)="onFileSelected($event)">
                     </div>
                      @if (cvError()) {
                         <p class="text-red-500 text-sm mt-1 text-end" role="alert">{{ cvError() }}</p>
                     }
                     <p class="text-[#888D91] text-sm mt-2 font-normal">{{ 'CAREERS.FORM.CV_HINT' | translate }}</p>
                 </div>

                 <!-- Server Error -->
                 @if (serverError()) {
                     <div class="p-4 bg-red-50 rounded-xl border border-red-100 text-red-600 text-end" role="alert">
                         {{ serverError() }}
                     </div>
                 }

                 <!-- Submit Button -->
                 <div class="pt-2">
                     <button type="submit" [disabled]="submitting()"
                             class="w-full py-4 bg-[#043458] text-white font-bold text-xl rounded-[16px] hover:bg-[#09528A] transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                             aria-label="Submit application">
                         @if (submitting()) {
                             {{ 'CAREERS.FORM.SUBMITTING' | translate }}
                         } @else {
                             {{ 'CAREERS.FORM.SUBMIT_BUTTON' | translate }}
                         }
                     </button>
                 </div>
             </form>
         }
    </div>
  `,
    styles: [`
        select {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23778D9D' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
            background-position: left 1rem center;
            background-repeat: no-repeat;
            background-size: 1.25em 1.25em;
            padding-inline-start: 2.5rem;
        }
        :host-context([dir="ltr"]) select {
             background-position: right 1rem center;
             padding-inline-start: 1rem;
             padding-inline-end: 2.5rem;
        }
        /* Custom styles for select placeholder color */
        select:not(.text-black) {
            color: #888D91;
        }
    `]
})
export class CareersFormComponent {
    majors = input.required<Major[]>();

    private fb = inject(FormBuilder);
    private apiService = inject(ApiService);
    private translate = inject(TranslateService);

    careerForm: FormGroup = this.fb.group({
        name: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]], // Email usually required in contact forms, inferred from Figma
        job_type: ['teacher'],
        major_id: ['', [Validators.required]],
        years_of_experience: [null, [Validators.required, Validators.min(0)]],
    });

    experienceOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // State Signals
    submitted = signal(false);
    submitting = signal(false);
    selectedFileName = signal<string>('');
    cvError = signal<string>('');
    serverError = signal<string>('');
    private selectedFile: File | null = null;

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.processFile(input.files[0]);
        }
    }

    private processFile(file: File): void {
        this.cvError.set('');
        const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
            this.translate.get('CAREERS.VALIDATION.CV_TYPE').subscribe(msg => this.cvError.set(msg));
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            this.translate.get('CAREERS.VALIDATION.CV_SIZE').subscribe(msg => this.cvError.set(msg));
            return;
        }
        this.selectedFile = file;
        this.selectedFileName.set(file.name);
    }

    onSubmit(): void {
        if (this.careerForm.invalid) {
            this.careerForm.markAllAsTouched();
            return;
        }

        if (!this.selectedFile) {
            this.translate.get('CAREERS.VALIDATION.CV_REQUIRED').subscribe(msg => this.cvError.set(msg));
            return;
        }

        this.submitting.set(true);
        this.serverError.set('');

        const formData = new FormData();
        formData.append('name', this.careerForm.get('name')?.value);
        formData.append('phone', this.careerForm.get('phone')?.value);
        formData.append('email', this.careerForm.get('email')?.value);
        formData.append('major_id', this.careerForm.get('major_id')?.value);

        const years = this.careerForm.get('years_of_experience')?.value;
        formData.append('years_of_experience', years === 11 ? '10+' : years); // Handle 10+

        formData.append('cv', this.selectedFile);

        this.apiService.submitCareerApplication(formData).subscribe({
            next: () => {
                this.submitting.set(false);
                this.submitted.set(true);
            },
            error: (err) => {
                this.submitting.set(false);
                if (err.error?.errors) {
                    const firstKey = Object.keys(err.error.errors)[0];
                    this.serverError.set(err.error.errors[firstKey][0]);
                } else {
                    this.translate.get('CAREERS.ERROR').subscribe(msg => {
                        this.serverError.set(err.error?.message || msg);
                    });
                }
            },
        });
    }

    resetForm() {
        this.submitted.set(false);
        this.careerForm.reset({ job_type: 'teacher' });
        this.selectedFileName.set('');
        this.selectedFile = null;
    }
}
