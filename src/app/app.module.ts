import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { VolverArribaComponent } from './componentes/volver-arriba/volver-arriba.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor.service';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BannerComponent } from './componentes/banner/banner.component';
import { EditBannerComponent } from './componentes/banner/edit-banner.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos.component';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    VolverArribaComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditHabilidadesComponent,
    NewHabilidadesComponent,
    EditAcercaDeComponent,
    BannerComponent,
    EditBannerComponent,
    NewProyectosComponent,
    EditProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())    
  ],

  providers: [
    interceptorProvider
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
