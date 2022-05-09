import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQualifierPageComponent } from './admin-qualifier-page.component';

describe('AdminQualifierPageComponent', () => {
  let component: AdminQualifierPageComponent;
  let fixture: ComponentFixture<AdminQualifierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQualifierPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQualifierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
