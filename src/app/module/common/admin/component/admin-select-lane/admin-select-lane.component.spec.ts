import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSelectLaneComponent } from './admin-select-lane.component';

describe('AdminSelectLaneComponent', () => {
  let component: AdminSelectLaneComponent;
  let fixture: ComponentFixture<AdminSelectLaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSelectLaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSelectLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
