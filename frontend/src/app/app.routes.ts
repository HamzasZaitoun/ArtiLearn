import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'careers',
        loadComponent: () =>
            import('./pages/careers/careers.component').then(
                (m) => m.CareersComponent
            ),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
