@extends('admin.layouts.app')

@section('title', 'Dashboard')
@section('header', 'Dashboard')

@section('content')
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div class="text-gray-500 text-sm font-medium">Total Students</div>
            <div class="text-3xl font-bold text-gray-900 mt-2">{{ $stats['students'] }}</div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div class="text-gray-500 text-sm font-medium">News Articles</div>
            <div class="text-3xl font-bold text-gray-900 mt-2">{{ $stats['news'] }}</div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div class="text-gray-500 text-sm font-medium">Testimonials</div>
            <div class="text-3xl font-bold text-gray-900 mt-2">{{ $stats['testimonials'] }}</div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div class="text-gray-500 text-sm font-medium">Career Submissions</div>
            <div class="text-3xl font-bold text-blue-600 mt-2">{{ $stats['careers'] }}</div>
        </div>
    </div>

    <!-- Latest Applications -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 class="text-lg font-semibold text-gray-800">Latest Career Applications</h3>
            <a href="{{ route('admin.careers.index') }}" class="text-blue-600 hover:text-blue-800 text-sm font-medium">View
                All</a>
        </div>
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-gray-50">
                    <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Major</th>
                    <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                    <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                @forelse($latestCareers as $career)
                    <tr class="hover:bg-gray-50 transition">
                        <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{{ $career->name }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-600">
                            {{ $career->major->name['en'] ?? $career->major->name }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-600">{{ $career->years_of_experience }} Years</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">{{ $career->created_at->diffForHumans() }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <a href="{{ route('admin.careers.show', $career) }}"
                                class="text-blue-600 hover:text-blue-900 font-medium text-sm">View</a>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" class="px-6 py-8 text-center text-gray-500">No applications yet.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
@endsection