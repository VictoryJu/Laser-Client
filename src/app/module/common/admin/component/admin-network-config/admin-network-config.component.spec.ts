import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNetworkConfigComponent } from './admin-network-config.component';

describe('AdminNetworkConfigComponent', () => {
  let component: AdminNetworkConfigComponent;
  let fixture: ComponentFixture<AdminNetworkConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNetworkConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNetworkConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
