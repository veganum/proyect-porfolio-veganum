import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(mod => mod.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(mod => mod.AboutComponent),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./pages/experience/experience.component').then(
        mod => mod.ExperienceComponent
      ),
  },
  {
    path: 'proyects',
    loadComponent: () =>
      import('./pages/proyects/proyects.component').then(
        mod => mod.ProyectsComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
