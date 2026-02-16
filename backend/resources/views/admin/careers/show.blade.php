@extends('admin.layouts.app')

@section('title', 'Application Details')
@section('header', 'Application Details')

@section('content')
    <div class="max-w-3xl">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div class="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                <h3 class="text-lg font-bold text-gray-800">Applicant Information</h3>
                <span class="text-sm text-gray-500">submitted {{ $career->created_at->diffForHumans() }}</span>
            </div>
            <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
                    <div class="text-lg font-medium text-gray-900">{{ $career->name }}</div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number</label>
                    <div class="text-lg font-medium text-gray-900">{{ $career->phone }}</div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Major / Specialization</label>
                    <div class="text-lg font-medium text-blue-600">{{ $career->major->name['en'] ?? '' }} /
                        {{ $career->major->name['ar'] ?? '' }}</div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Experience</label>
                    <div class="text-lg font-medium text-gray-900">{{ $career->years_of_experience }} Years</div>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 class="text-lg font-bold text-gray-800">Attachments</h3>
            </div>
            <div class="p-6 flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <div class="bg-red-100 p-3 rounded-lg">
                        <svg class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div>
                        <div class="font-medium text-gray-900">Curriculum Vitae (CV)</div>
                        <div class="text-sm text-gray-500">PDF / DOCX Document</div>
                    </div>
                </div>
                <a href="{{ asset('storage/' . $career->cv_path) }}" target="_blank"
                    class="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download CV
                </a>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-between">
            <a href="{{ route('admin.careers.index') }}" class="text-gray-600 hover:text-gray-900 font-medium">← Back to
                List</a>

            <form action="{{ route('admin.careers.destroy', $career) }}" method="POST"
                  onsubmit="return confirm('Are you sure you want to delete this application? The CV file will also be removed.')">
                @csrf
                @method('DELETE')
                <button type="submit"
                    class="bg-red-100 hover:bg-red-200 text-red-700 font-medium py-2 px-4 rounded text-sm transition">
                    Delete Application
                </button>
            </form>
        </div>
    </div>
@endsection