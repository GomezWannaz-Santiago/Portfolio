import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NameComponent } from './pages/name/name.component';

export const routes: Routes = [
    {path : 'name', component: NameComponent},
    {'path':"**", component: LandingComponent}
];
