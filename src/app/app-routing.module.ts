import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditBannerComponent } from './componentes/banner/edit-banner.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos.component';

const routes: Routes = [
  {path:'', component: PortfolioComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaeduc', component: NewEducacionComponent},
  {path: 'editeduc/:id', component: EditEducacionComponent},
  {path: 'nuevaexpe', component: NewExperienciaComponent},
  {path: 'editexpe/:id', component: EditExperienciaComponent},
  {path: 'nuevahab', component: NewHabilidadesComponent},
  {path: 'edithab/:id', component: EditHabilidadesComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent},
  {path: 'editbanner/:id', component: EditBannerComponent},
  {path: 'nuevoproy', component: NewProyectosComponent},
  {path: 'editproy/:id', component: EditProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
