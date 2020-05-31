import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDuenoMascotaComponent } from './mostrar-dueno-mascota.component';

describe('MostrarDuenoMascotaComponent', () => {
  let component: MostrarDuenoMascotaComponent;
  let fixture: ComponentFixture<MostrarDuenoMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarDuenoMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDuenoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
