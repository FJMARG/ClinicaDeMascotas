import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarAMascotaComponent } from './asignar-amascota.component';

describe('AsignarAMascotaComponent', () => {
  let component: AsignarAMascotaComponent;
  let fixture: ComponentFixture<AsignarAMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarAMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarAMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
