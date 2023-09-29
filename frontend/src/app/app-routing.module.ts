import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { LetrasComponent } from './letras/letras.component';
import { AdmiComponent } from './admi/admi.component';
import { ListComponent } from './components/list/list.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { ModulosLetrasComponent } from './components/modulos-letras/modulos-letras.component';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { Evaluacioncomponent } from './components/evaluacion/evaluacion.component';
import { tableEvaluationcomponent } from './components/evaluacion/tableEvaluation.component';
import { moduloAdmincomponent } from './admi/moduloAdmin.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'home', component: HomeComponent },
  { path: 'principal',component:PrincipalComponent},
  { path: 'letras/:id', component:LetrasComponent},
  { path: 'admi', component:AdmiComponent},
  { path: 'users',component:ListComponent},
  { path: 'add', component:AddEditComponent},
  { path: 'edit/:id', component:AddEditComponent},
  { path: 'ModuloLetras', component:ModulosLetrasComponent},
  { path: 'Estadisticas', component:StadisticsComponent},
  { path: 'prueba/:id', component:PruebasComponent},
  { path: 'evaluacion', component:Evaluacioncomponent},
  { path: 'ModuloEvaluaciones', component:tableEvaluationcomponent},
  { path: 'moduloAdmin', component:moduloAdmincomponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
