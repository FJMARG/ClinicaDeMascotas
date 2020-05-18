import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRecordatorioComponent } from './agregar-recordatorio.component';

describe('AgregarRecordatorioComponent', () => {
  let component: AgregarRecordatorioComponent;
  let fixture: ComponentFixture<AgregarRecordatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarRecordatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
