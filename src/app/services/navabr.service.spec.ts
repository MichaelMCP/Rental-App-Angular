import { TestBed, inject } from '@angular/core/testing';

import { NavabrService } from './navabr.service';

describe('NavabrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavabrService]
    });
  });

  it('should be created', inject([NavabrService], (service: NavabrService) => {
    expect(service).toBeTruthy();
  }));
});
