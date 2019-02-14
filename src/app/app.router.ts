import {RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import {NavbarComponent} from '../app/components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { WeComponent } from './components/we/we.component';




const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'we', component: WeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
