import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path:'', 
        loadComponent: () => import('./pages/listing/listing.component').then(c => c.ListingComponent) 
    },
    { 
        path:'parent', 
        loadComponent: () => import('./components/parent/parent.component').then(c => c.ParentComponent) 
    },
    { 
        path:'listing', 
        loadComponent: () => import('./pages/listing/listing.component').then(c => c.ListingComponent) 
    }
];
