import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdLayoutComponent } from './md.layout.component';

describe('LayoutComponent', () => {
  let component: MdLayoutComponent;
  let fixture: ComponentFixture<MdLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
