import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  title = 'Clinica de Mascotas';

  constructor() { }

}
