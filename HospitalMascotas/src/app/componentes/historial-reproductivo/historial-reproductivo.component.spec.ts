import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialReproductivoComponent } from './historial-reproductivo.component';

describe('HistorialReproductivoComponent', () => {
  let component: HistorialReproductivoComponent;
  let fixture: ComponentFixture<HistorialReproductivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialReproductivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialReproductivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
