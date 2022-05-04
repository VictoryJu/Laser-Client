import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGameManagementComponent } from './admin-game-management.component';

describe('AdminGameManagementComponent', () => {
  let component: AdminGameManagementComponent;
  let fixture: ComponentFixture<AdminGameManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGameManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGameManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
