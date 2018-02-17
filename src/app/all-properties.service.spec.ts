import { TestBed, inject } from '@angular/core/testing';

import { AllPropertiesService } from './all-properties.service';

describe('AllPropertiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllPropertiesService]
    });
  });

  it('should be created', inject([AllPropertiesService], (service: AllPropertiesService) => {
    expect(service).toBeTruthy();
  }));
});
