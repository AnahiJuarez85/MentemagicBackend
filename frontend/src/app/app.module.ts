import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { LetrasComponent } from './letras/letras.component';
import { AdmiComponent } from './admi/admi.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { ModulosLetrasComponent } from './components/modulos-letras/modulos-letras.component';
import { HttpClientModule } from '@angular/common/http';
import { StadisticsComponent } from './stadistics/stadistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    LetrasComponent,
    AdmiComponent,
    NavbarComponent,
    ListComponent,
    AddEditComponent,
    ModulosLetrasComponent,
    StadisticsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }