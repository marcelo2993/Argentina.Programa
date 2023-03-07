import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SkillsComponent } from './skills/skills.component';
import { BanerComponent } from './baner/baner.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PerfilComponent,
    DescripcionComponent,
    ExperienciaComponent,
    ContactoComponent,
    SkillsComponent,
    BanerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
