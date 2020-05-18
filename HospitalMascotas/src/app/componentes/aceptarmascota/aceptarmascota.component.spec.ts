import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarmascotaComponent } from './aceptarmascota.component';

describe('AceptarmascotaComponent', () => {
  let component: AceptarmascotaComponent;
  let fixture: ComponentFixture<AceptarmascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceptarmascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
