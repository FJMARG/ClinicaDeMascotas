import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarVeterinarioComponent } from './validar-veterinario.component';

describe('ValidarVeterinarioComponent', () => {
  let component: ValidarVeterinarioComponent;
  let fixture: ComponentFixture<ValidarVeterinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarVeterinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
