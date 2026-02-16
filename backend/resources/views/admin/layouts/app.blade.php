<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Panel') - Artikeys</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>

<body class="bg-gray-100">
    <div class="min-h-screen flex">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-900 text-white flex flex-col fixed h-full">
            <div class="p-6 border-b border-gray-800">
                <h1 class="text-2xl font-bold text-blue-500">Artikeys</h1>
                <p class="text-xs text-gray-500 mt-1">Admin Panel</p>
            </div>
            <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
                <a href="{{ route('admin.dashboard') }}"
                    class="block px-4 py-2 rounded hover:bg-gray-800 {{ request()->routeIs('admin.dashboard') ? 'bg-gray-800 text-blue-400' : '' }}">
                    Dashboard
                </a>
                <a href="{{ route('admin.news.index') }}"
                    class="block px-4 py-2 rounded hover:bg-gray-800 {{ request()->routeIs('admin.news.*') ? 'bg-gray-800 text-blue-400' : '' }}">
                    News
                </a>
                <a href="{{ route('admin.testimonials.index') }}"
                    class="block px-4 py-2 rounded hover:bg-gray-800 {{ request()->routeIs('admin.testimonials.*') ? 'bg-gray-800 text-blue-400' : '' }}">
                    Testimonials
                </a>
                <a href="{{ route('admin.careers.index') }}"
                    class="block px-4 py-2 rounded hover:bg-gray-800 {{ request()->routeIs('admin.careers.*') ? 'bg-gray-800 text-blue-400' : '' }}">
                    Career Submissions
                </a>
            </nav>
            <div class="p-4 border-t border-gray-800">
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit" class="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-800 rounded">
                        Logout
                    </button>
                </form>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 ml-64 p-8">
            <header class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold text-gray-800">@yield('header')</h2>
                <div class="flex items-center gap-4">
                    <span class="text-gray-600">{{ auth()->user()->name }}</span>
                </div>
            </header>

            @if(session('success'))
                <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                    {{ session('success') }}
                </div>
            @endif

            @yield('content')
        </main>
    </div>
</body>

</html>