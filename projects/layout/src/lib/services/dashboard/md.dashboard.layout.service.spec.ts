import { TestBed } from '@angular/core/testing';
import {MdDashboardLayoutService} from "./md.dashboard.layout.service";

describe('MdDashboardLayoutService', () => {
  let service: MdDashboardLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdDashboardLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
