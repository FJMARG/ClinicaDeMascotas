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

const appRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'board', component: BoardComponent },
  { path: 'editprofile', component: EditarPerfilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    NavComponent,
    BoardComponent,
<<<<<<< HEAD
    EditarPerfilComponent
=======
    RegistroMascotaComponent
>>>>>>> 625050b484161b51f4b64b62b05804cee009b755
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
    {provide:HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
