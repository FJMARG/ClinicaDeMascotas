import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMascotasComponent } from './buscar-mascotas.component';

describe('BuscarMascotasComponent', () => {
  let component: BuscarMascotasComponent;
  let fixture: ComponentFixture<BuscarMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
