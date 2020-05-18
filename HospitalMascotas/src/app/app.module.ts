import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegistroService } from './servicios/registro.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { NavComponent } from './componentes/nav/nav.component';
import { BoardComponent } from './componentes/board/board.component';
import { TokenInterceptorService } from './servicios/token-interceptor.service';
import { LoginService } from './servicios/login.service';
import { LocalStorageService } from './servicios/local-storage.service';
import { MascotasService } from './servicios/mascotas-service';
import { SessionService } from './servicios/session.service';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { UsuarioService } from './servicios/usuario.service';
import { RegistroMascotaComponent } from './componentes/registro-mascota/registro-mascota.component';
import { RegistroMascotaService } from './servicios/registro-mascotas-service';
import { ValidarVeterinarioComponent } from './componentes/validar-veterinario/validar-veterinario.component';
import { RecordatoriosComponent } from './componentes/recordatorios/recordatorios.component';
import { AgregarRecordatorioComponent } from './componentes/agregar-recordatorio/agregar-recordatorio.component';
import { EliminarMascotaComponent } from './componentes/eliminar-mascota/eliminar-mascota.component';
import { GestionarMascotasComponent } from './componentes/gestionar-mascotas/gestionar-mascotas.component';
import { EditarMascotaComponent } from './componentes/editar-mascota/editar-mascota.component';
import { VisitasComponent } from './componentes/visitas/visitas.component';
import { VisitaVeterinarioComponent } from './componentes/visita-veterinario/visita-veterinario.component';
import { AsignarVeterinarioComponent } from './componentes/asignar-veterinario/asignar-veterinario.component';
import { AsignarAMascotaComponent } from './componentes/asignar-amascota/asignar-amascota.component';
import { AceptarmascotaComponent } from './componentes/aceptarmascota/aceptarmascota.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'board', component: BoardComponent },
  { path: 'editprofile', component: EditarPerfilComponent },
  { path: 'agregarmascota', component: RegistroMascotaComponent },
  { path: 'validarveterinarios', component: ValidarVeterinarioComponent },
  { path: 'listarrecordatorios', component: RecordatoriosComponent },
  { path: 'agregarrecordatorio', component: AgregarRecordatorioComponent },
  { path: 'gestionarmascotas', component: GestionarMascotasComponent },
  { path: 'eliminarmascota/:id', component: EliminarMascotaComponent },
  { path: 'editarmascota/:id', component: EditarMascotaComponent },
  { path: 'altavisitaveterinario', component: VisitaVeterinarioComponent },
  { path: 'asignarveterinario', component: AsignarVeterinarioComponent },
  { path: 'asignaramascota/:id', component: AsignarAMascotaComponent },
  { path: 'aceptarmascotas', component: AceptarmascotaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    NavComponent,
    BoardComponent,
    EditarPerfilComponent,
    RegistroMascotaComponent,
    ValidarVeterinarioComponent,
    RecordatoriosComponent,
    AgregarRecordatorioComponent,
    EliminarMascotaComponent,
    GestionarMascotasComponent,
    EditarMascotaComponent,
    VisitasComponent,
    VisitaVeterinarioComponent,
    AsignarVeterinarioComponent,
    AsignarAMascotaComponent,
    AceptarmascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } //<--debugging purposes only
      )
  ],
  providers: [
    RegistroService,
    LoginService,
    LocalStorageService,
    MascotasService,
    SessionService,
    UsuarioService,
    RegistroMascotaService,
    {provide:HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
