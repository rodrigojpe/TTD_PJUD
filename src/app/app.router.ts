import {RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import { WeComponent } from './components/we/we.component';
import { SecretariaTecnicaComponent } from './components/secretaria-tecnica/secretaria-tecnica.component';
import { NoticieroComponent } from './components/noticiero/noticiero.component';
import { ReunionesComponent } from './components/reuniones/reuniones.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { VisionComponent } from './components/vision/vision.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { StatutosComponent } from './components/statutos/statutos.component';
import { LoginComponent } from './components/login/login.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { MapaComponent } from './components/mapa/mapa.component';




const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'secretaria', component: SecretariaTecnicaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'noticiero', component: NoticieroComponent },
  { path: 'contacto', component: ContactanosComponent },
  { path: 'mision', component: VisionComponent },
  { path: 'objetivos', component: ObjetivosComponent },
  { path: 'statutos', component: StatutosComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'we', component: WeComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'reuniones', component: ReunionesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
