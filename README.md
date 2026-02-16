# 🚀 ArtiLearn — Next-Gen Education Platform

![Status](https://img.shields.io/badge/Status-Active-success)
![Laravel](https://img.shields.io/badge/Laravel-11-red)
![Angular](https://img.shields.io/badge/Angular-17-dd0031)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ed)
![License](https://img.shields.io/badge/License-MIT-blue)

A cutting-edge, bilingual E-Learning platform architecture designed for scalability, performance, and developer experience.

---

## ✨ Key Features

This project isn't just a task; it's a **blueprint for modern web architecture**.

*   **🌍 Truly Bilingual (i18n)**: Seamless English/Arabic support with **automatic RTL layout switching** and backend-driven content localization.
*   **🏗️ Modular Frontend Architecture**: Built with **Angular 17+ Standalone Components**, creating a lightweight, tree-shakeable, and blazing-fast SPA.
*   **⚡ Reactive State Management**: Leveraging **Angular Signals** for granular reactivity and high-performance UI updates.
*   **🔌 Service-Oriented Backend**: A clean **Laravel 11 API** with a dedicated Service Layer, keeping controllers thin and business logic reusable.
*   **🐳 Docker-Native Workflow**: Spin up the entire stack (Frontend, Backend, Database) with a **single command**.
*   **🛡️ Secure Admin Portal**: Comprehensive admin dashboard for managing news, testimonials, and career applications.
*   **🎨 Premium UI/UX**: A polished, responsive interface featuring modern glassmorphism, smooth transitions, and pixel-perfect implementation of Figma designs.

---

## 🚀 Getting Started

Choose your preferred way to run the project.

### Option 1: The "One-Command" Way (Docker) 🐳

The fastest way to get up and running. Requires [Docker Desktop](https://www.docker.com/products/docker-desktop).

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/HamzasZaitoun/ArtiLearn
    cd ArtiLearn
    ```

2.  **Launch everything**:
    ```bash
    docker compose up -d --build
    ```
    *(This builds the images, sets up the database, runs migrations, seeds data, and serves the apps. Wait ~90 seconds for initialization).*

3.  **Access the App**:
    *   **Frontend**: [http://localhost:4200](http://localhost:4200)
    *   **Backend API**: [http://localhost:8000/api](http://localhost:8000/api)
    *   **Admin Panel**: [http://localhost:8000/login](http://localhost:8000/login)

4.  **Stop**:
    ```bash
    docker compose down -v
    ```

---

### Option 2: The "Classic" Way (Manual Setup) 🛠️

If you prefer running services natively on your machine.

#### Prerequisites
*   **PHP 8.2+** (Extensions: `pdo_mysql`, `gd`, `intl`)
*   **Composer 2.x**
*   **Node.js 20+** & **npm 10+**
*   **MySQL 8.0** server running locally (or via Docker: `docker compose up db -d`)

#### 1. Backend Setup (Laravel)

```bash
cd backend

# Install dependencies
composer install

# Configure environment
cp .env.example .env
# ⚠️ Update .env with your local DB credentials (DB_HOST=127.0.0.1, DB_PORT=3306, etc.)

# Generate Key & Migrate
php artisan key:generate
php artisan migrate:fresh --seed
php artisan storage:link

# Serve
php artisan serve
# Server running at: http://127.0.0.1:8000
```

#### 2. Frontend Setup (Angular)

```bash
cd frontend

# Install dependencies
npm install

# Serve
npx ng serve
# App running at: http://localhost:4200
```

---

## 🔑 Default Credentials

Use these credentials to access the Admin Portal:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Super Admin** | `admin@artikeys.com` | `password` |

---

## 🏗️ Technical Architecture

### Backend (Laravel 11)
*   **Service Layer Pattern**: Business logic resides in `app/Services`, not Controllers.
*   **Form Requests**: Strict validation logic separated into `app/Http/Requests`.
*   **JSON Casting**: Multilingual fields (`title`, `content`) nicely cast to arrays automatically.
*   **API Resources**: Transforming Eloquent models into consistent JSON responses.

### Frontend (Angular 17)
*   **Standalone Components**: No `NgModules`. Modern, simplified imports.
*   **Signals**: Used for `loading` states, form handling, and language switching.
*   **Lazy Loading**: Routes are lazy-loaded for optimal performance.
*   **Interceptors**: `LanguageInterceptor` automatically attaches `Accept-Language` headers.

---

## � Project Structure

```bash
ArtiKeysTask/
├── docker-compose.yml       # Orchestration
├── backend/                 # Laravel API
│   ├── app/Services/        # Business Logic
│   ├── app/Http/Controllers/# API & Admin Controllers
│   └── database/            # Migrations & Seeders
└── frontend/                # Angular SPA
    ├── src/app/pages/       # Route Components (Home, Careers)
    ├── src/app/components/  # Reusable UI Components
    └── src/app/services/    # API & State Management
```

---

## � API Documentation

The Collection is included in the repo: `artikeys-postman-collection.json`.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/home` | Returns Levels, News, Testimonials, Partners |
| `GET` | `/api/majors` | Returns list of majors for dropdowns |
| `POST` | `/api/careers/apply` | Submit a new career application (Multipart) |

---

## � License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
