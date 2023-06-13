import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { LetrasComponent } from './letras/letras.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'home', component: HomeComponent },
  { path: 'principal',component:PrincipalComponent},
  { path: 'letras', component:LetrasComponent},
  { path: 'prueba', component:PruebaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
