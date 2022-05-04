import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistPlayerComponent } from './admin-regist-player.component';

describe('AdminRegistPlayerComponent', () => {
  let component: AdminRegistPlayerComponent;
  let fixture: ComponentFixture<AdminRegistPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegistPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
