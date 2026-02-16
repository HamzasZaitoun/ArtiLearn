<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Validates bilingual testimonial creation and updates.
 */
class StoreTestimonialRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, array<int, string>>
     */
    public function rules(): array
    {
        return [
            'author_en' => ['required', 'string', 'max:255'],
            'author_ar' => ['required', 'string', 'max:255'],
            'content_en' => ['required', 'string'],
            'content_ar' => ['required', 'string'],
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'is_active' => ['boolean'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'author_en.required' => 'English author name is required.',
            'author_ar.required' => 'Arabic author name is required.',
            'content_en.required' => 'English content is required.',
            'content_ar.required' => 'Arabic content is required.',
            'rating.required' => 'Rating is required.',
            'rating.min' => 'Rating must be at least 1.',
            'rating.max' => 'Rating must not exceed 5.',
        ];
    }
}
