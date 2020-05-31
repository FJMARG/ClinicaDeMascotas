import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiComponent } from './vei.component';

describe('VeiComponent', () => {
  let component: VeiComponent;
  let fixture: ComponentFixture<VeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
