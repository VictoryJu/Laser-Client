import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGroupBoardComponent } from './admin-group-board.component';

describe('AdminGroupBoardComponent', () => {
  let component: AdminGroupBoardComponent;
  let fixture: ComponentFixture<AdminGroupBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGroupBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGroupBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
