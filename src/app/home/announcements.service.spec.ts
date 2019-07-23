import { HttpClient } from '@angular/common/http';
import { AnnouncementsService } from './announcements.service';

let service: AnnouncementsService;
let httpClient: HttpClient;

describe('AnnouncementsService', () => {
  beforeEach(() => {
    service = new AnnouncementsService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
