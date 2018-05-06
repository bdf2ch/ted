import { TestBed, inject } from '@angular/core/testing';

import { AccountResource } from './account.resource';

describe('AccountResource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountResource]
    });
  });

  it('should be created', inject([AccountResource], (service: AccountResource) => {
    expect(service).toBeTruthy();
  }));
});
