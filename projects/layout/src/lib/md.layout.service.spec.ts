import { TestBed } from '@angular/core/testing';

import { MdLayoutService } from './md.layout.service';

describe('LayoutService', () => {
  let service: MdLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
