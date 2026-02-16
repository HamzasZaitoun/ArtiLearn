@extends('admin.layouts.app')

@section('title', 'Edit News')
@section('header', 'Edit News Article')

@section('content')
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden max-w-4xl">
        <form action="{{ route('admin.news.update', $news) }}" method="POST" enctype="multipart/form-data" class="p-6">
            @csrf
            @method('PUT')

            <!-- English Section -->
            <div class="mb-6 border-b pb-6">
                <h4 class="text-sm font-bold text-gray-500 uppercase mb-4">English Content</h4>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Title (EN)</label>
                    <input type="text" name="title_en" value="{{ old('title_en', $news->title['en'] ?? '') }}"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Content (EN)</label>
                    <textarea name="content_en" rows="4"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required>{{ old('content_en', $news->content['en'] ?? '') }}</textarea>
                </div>
            </div>

            <!-- Arabic Section -->
            <div class="mb-6 border-b pb-6" dir="rtl">
                <h4 class="text-sm font-bold text-gray-500 uppercase mb-4 text-right">المحتوى العربي</h4>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">العنوان (AR)</label>
                    <input type="text" name="title_ar" value="{{ old('title_ar', $news->title['ar'] ?? '') }}"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">المحتوى (AR)</label>
                    <textarea name="content_ar" rows="4"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required>{{ old('content_ar', $news->content['ar'] ?? '') }}</textarea>
                </div>
            </div>

            <!-- Meta Section -->
            <div class="mb-6">
                <h4 class="text-sm font-bold text-gray-500 uppercase mb-4">Metadata</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-gray-700 text-sm font-bold mb-2">Published Date</label>
                        <input type="date" name="published_at"
                            value="{{ old('published_at', optional($news->published_at)->format('Y-m-d')) }}"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div>
                        <label class="block text-gray-700 text-sm font-bold mb-2">Image</label>
                        @if($news->image_path)
                            <div class="mb-2">
                                <img src="{{ asset('storage/' . $news->image_path) }}" alt="Current Image"
                                    class="h-20 w-auto rounded border">
                            </div>
                        @endif
                        <input type="file" name="image"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <p class="text-xs text-gray-500 mt-1">Leave blank to keep current image.</p>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-end gap-3">
                <a href="{{ route('admin.news.index') }}"
                    class="text-gray-600 hover:text-gray-800 font-medium px-4 py-2">Cancel</a>
                <button type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition">
                    Update Article
                </button>
            </div>
        </form>
    </div>
@endsection