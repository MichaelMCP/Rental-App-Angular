import { TestBed, inject } from '@angular/core/testing';

import { RegisterPropertyService } from './register-property.service';

describe('RegisterPropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterPropertyService]
    });
  });

  it('should be created', inject([RegisterPropertyService], (service: RegisterPropertyService) => {
    expect(service).toBeTruthy();
  }));
});
