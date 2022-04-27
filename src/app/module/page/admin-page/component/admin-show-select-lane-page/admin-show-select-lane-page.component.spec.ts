import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowSelectLanePageComponent } from './admin-show-select-lane-page.component';

describe('AdminShowSelectLanePageComponent', () => {
  let component: AdminShowSelectLanePageComponent;
  let fixture: ComponentFixture<AdminShowSelectLanePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowSelectLanePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowSelectLanePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
