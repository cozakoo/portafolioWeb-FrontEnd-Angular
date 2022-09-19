import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperienciaEducacionComponent } from './components/experiencia-educacion/experiencia-educacion.component';
import { HardSoftComponent } from './components/hard-soft/hard-soft.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { BotonwhatsappComponent } from './components/botonwhatsapp/botonwhatsapp.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';

@NgModule({
    declarations: [
    AppComponent,
    EncabezadoComponent,
    PresentacionComponent,
    AboutmeComponent,
    ExperienciaEducacionComponent,
    HardSoftComponent,
    ProyectosComponent,
    BotonwhatsappComponent,
    PiePaginaComponent,
  ],
  imports:[
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
