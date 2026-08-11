import { TestBed } from '@angular/core/testing';

import { UfMunicipios } from './uf-municipios';

describe('UfMunicipios', () => {
  let service: UfMunicipios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfMunicipios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
