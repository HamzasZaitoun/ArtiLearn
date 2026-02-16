@extends('admin.layouts.app')

@section('title', 'Add Testimonial')
@section('header', 'Add Testimonial')

@section('content')
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden max-w-4xl">
        <form action="{{ route('admin.testimonials.store') }}" method="POST" class="p-6">
            @csrf

            <!-- English Section -->
            <div class="mb-6 border-b pb-6">
                <h4 class="text-sm font-bold text-gray-500 uppercase mb-4">English Content</h4>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Author Name (EN)</label>
                    <input type="text" name="author_en" value="{{ old('author_en') }}"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Content (EN)</label>
                    <textarea name="content_en" rows="3"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required>{{ old('content_en') }}</textarea>
                </div>
            </div>

            <!-- Arabic Section -->
            <div class="mb-6 border-b pb-6" dir="rtl">
                <h4 class="text-sm font-bold text-gray-500 uppercase mb-4 text-right">المحتوى العربي</h4>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">اسم المؤلف (AR)</label>
                    <input type="text" name="author_ar" value="{{ old('author_ar') }}"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">المحتوى (AR)</label>
                    <textarea name="content_ar" rows="3"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required>{{ old('content_ar') }}</textarea>
                </div>
            </div>

            <!-- Meta Section -->
            <div class="mb-6">
                <h4 class="text-sm font-bold text-gray-500 uppercase mb-4">Metadata</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-gray-700 text-sm font-bold mb-2">Rating (1-5)</label>
                        <select name="rating"
                            class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="5" selected>5 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="2">2 Stars</option>
                            <option value="1">1 Star</option>
                        </select>
                    </div>
                    <div class="flex items-center mt-6">
                        <label class="flex items-center cursor-pointer">
                            <input type="checkbox" name="is_active" value="1" class="form-checkbox h-5 w-5 text-blue-600"
                                checked>
                            <span class="ml-2 text-gray-700 font-bold">Is Active?</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-end gap-3">
                <a href="{{ route('admin.testimonials.index') }}"
                    class="text-gray-600 hover:text-gray-800 font-medium px-4 py-2">Cancel</a>
                <button type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition">
                    Add Testimonial
                </button>
            </div>
        </form>
    </div>
@endsection