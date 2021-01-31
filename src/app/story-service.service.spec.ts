import { TestBed } from '@angular/core/testing';

import { StoryDataService } from './story-service.service';

describe('StoryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryDataService = TestBed.get(StoryDataService);
    expect(service).toBeTruthy();
  });
});
