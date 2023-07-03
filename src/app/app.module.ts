import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

//Servicios
import { ServiceModule } from './services/service.module';



//DOM
import { CommonModule, DOCUMENT } from '@angular/common';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule,
    CommonModule

  ],
  providers: [{ provide: DOCUMENT, useValue: document }],
  bootstrap: [AppComponent]
})
export class AppModule { }
