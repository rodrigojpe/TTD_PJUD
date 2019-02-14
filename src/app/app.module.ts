import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TtdComponent } from './components/ttd/ttd.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.router';
import { WeComponent } from './components/we/we.component';
import { SecretariaTecnicaComponent } from './components/secretaria-tecnica/secretaria-tecnica.component';

@NgModule({
  declarations: [
    AppComponent,
    TtdComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    WeComponent,
    SecretariaTecnicaComponent    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
