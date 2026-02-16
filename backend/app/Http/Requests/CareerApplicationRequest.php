<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Validates career application submissions from the public API.
 */
class CareerApplicationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Public endpoint
    }

    /**
     * @return array<string, array<int, string>>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:20'],
            'major_id' => ['required', 'exists:majors,id'],
            'cv' => ['required', 'file', 'mimes:pdf,docx', 'max:5120'],
            'years_of_experience' => ['required', 'integer', 'min:0', 'max:50'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Your name is required.',
            'phone.required' => 'Phone number is required.',
            'major_id.required' => 'Please select a major.',
            'major_id.exists' => 'Selected major is invalid.',
            'cv.required' => 'Please upload your CV.',
            'cv.mimes' => 'Only PDF and DOCX files are accepted.',
            'cv.max' => 'File size must not exceed 5MB.',
            'years_of_experience.required' => 'Years of experience is required.',
            'years_of_experience.min' => 'Experience must be at least 0.',
        ];
    }
}
