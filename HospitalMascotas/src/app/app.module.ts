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
import { RegistroMascotaComponent } from './componentes/registro-mascota/registro-mascota.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'board', component: BoardComponent }
//{ path: 'component-two', component: ComponentTwo }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    NavComponent,
    BoardComponent,
    RegistroMascotaComponent
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
    {provide:HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
