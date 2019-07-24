import { HttpClient } from '@angular/common/http';
import { DocumentationService } from './documentation.service';

let service: DocumentationService;
let httpClient: HttpClient;

describe('AnnouncementsService', () => {
  beforeEach(() => {
    service = new DocumentationService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
