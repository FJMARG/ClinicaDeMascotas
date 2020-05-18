import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaVeterinarioComponent } from './visita-veterinario.component';

describe('VisitaVeterinarioComponent', () => {
  let component: VisitaVeterinarioComponent;
  let fixture: ComponentFixture<VisitaVeterinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaVeterinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
