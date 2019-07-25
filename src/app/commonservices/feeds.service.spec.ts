import { HttpClient } from '@angular/common/http';
import { FeedsService } from './feeds.service';

let service: FeedsService;
let httpClient: HttpClient;

describe('FeedsService', () => {
  beforeEach(() => {
    service = new FeedsService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
