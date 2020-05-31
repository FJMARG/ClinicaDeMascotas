import { TestBed } from '@angular/core/testing';

import { RegistroVisitaService } from './registro-visita.service';

describe('RegistroVisitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroVisitaService = TestBed.get(RegistroVisitaService);
    expect(service).toBeTruthy();
  });
});
