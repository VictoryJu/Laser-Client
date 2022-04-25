import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagementGamePageComponent } from './admin-management-game-page.component';

describe('AdminManagementGamePageComponent', () => {
  let component: AdminManagementGamePageComponent;
  let fixture: ComponentFixture<AdminManagementGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManagementGamePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagementGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
