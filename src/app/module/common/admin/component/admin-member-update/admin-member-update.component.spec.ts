import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMemberUpdateComponent } from './admin-member-update.component';

describe('AdminMemberUpdateComponent', () => {
  let component: AdminMemberUpdateComponent;
  let fixture: ComponentFixture<AdminMemberUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMemberUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMemberUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
