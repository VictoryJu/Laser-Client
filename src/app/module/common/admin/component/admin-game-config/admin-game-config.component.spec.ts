import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGameConfigComponent } from './admin-game-config.component';

describe('AdminGameConfigComponent', () => {
  let component: AdminGameConfigComponent;
  let fixture: ComponentFixture<AdminGameConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGameConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGameConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
