import { TestBed } from '@angular/core/testing';

import { AlbumUpdateService } from './album-update.service';

describe('AlbumUpdateService', () => {
  let service: AlbumUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
