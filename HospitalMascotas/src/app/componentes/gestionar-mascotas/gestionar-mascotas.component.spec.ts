import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarMascotasComponent } from './gestionar-mascotas.component';

describe('GestionarMascotasComponent', () => {
  let component: GestionarMascotasComponent;
  let fixture: ComponentFixture<GestionarMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
