import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { LetrasComponent } from './letras/letras.component';
import { PruebaComponent } from './prueba/prueba.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    LetrasComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  

    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
