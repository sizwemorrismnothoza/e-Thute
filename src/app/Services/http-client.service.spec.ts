import { TestBed } from '@angular/core/testing';

import { HttpLearnerService } from './http-learner.service';

describe('HttpClientService', () => {
  let service: HttpLearnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLearnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
