import { TestBed } from '@angular/core/testing';

import { AnnouncementsService } from './announcements.service';

describe('AnnouncementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnouncementsService = TestBed.get(AnnouncementsService);
    expect(service).toBeTruthy();
  });
});
