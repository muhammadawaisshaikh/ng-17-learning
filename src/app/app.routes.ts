import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path:'', 
        loadComponent: () => import('./components/parent/parent.component').then(c => c.ParentComponent) 
    }
];
