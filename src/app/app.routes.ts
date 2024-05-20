import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./pages/home/home.component').then((x)=> x.HomeComponent)},
    {path: 'features', loadComponent: () => import('./pages/features/features.component').then((x)=> x.FeaturesComponent)},
    {path: 'personal-info', loadComponent: () => import('./pages/personal-info/personal-info.component').then((x)=> x.PersonalInfoComponent)},
    {path: 'planning/:actionType', loadComponent: () => import('./pages/planning/planning.component').then((x)=> x.PlanningComponent)},
    {path: 'archive/:name', loadComponent: () => import('./pages/archive/archive.component').then((x)=> x.ArchiveComponent)},
];


