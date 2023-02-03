import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MdDashboardLayout} from "./md.dashboard.layout";

describe('MdDashboardLayout', () => {
  let component: MdDashboardLayout;
  let fixture: ComponentFixture<MdDashboardLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdDashboardLayout ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MdDashboardLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
