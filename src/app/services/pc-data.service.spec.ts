import { TestBed } from '@angular/core/testing';

import { PCDataService } from './pc-data.service';

describe('PCDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PCDataService = TestBed.get(PCDataService);
    expect(service).toBeTruthy();
  });
});
