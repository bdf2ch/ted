import { TestBed, inject } from '@angular/core/testing';

import { CompanyResource } from './company.resource';

describe('CompanyResource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyResource]
    });
  });

  it('should be created', inject([CompanyResource], (service: CompanyResource) => {
    expect(service).toBeTruthy();
  }));
});
