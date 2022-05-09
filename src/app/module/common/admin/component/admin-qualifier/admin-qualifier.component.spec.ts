import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQualifierComponent } from './admin-qualifier.component';

describe('AdminQualifierComponent', () => {
  let component: AdminQualifierComponent;
  let fixture: ComponentFixture<AdminQualifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQualifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQualifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
