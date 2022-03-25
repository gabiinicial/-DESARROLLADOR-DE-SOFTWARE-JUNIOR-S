import { TestBed } from '@angular/core/testing';

import { UseApiMunicipalyService } from './use-api-municipaly.service';

describe('UseApiMunicipalyService', () => {
  let service: UseApiMunicipalyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseApiMunicipalyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
