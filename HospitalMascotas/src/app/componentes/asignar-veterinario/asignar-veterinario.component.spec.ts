import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarVeterinarioComponent } from './asignar-veterinario.component';

describe('AsignarVeterinarioComponent', () => {
  let component: AsignarVeterinarioComponent;
  let fixture: ComponentFixture<AsignarVeterinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarVeterinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
