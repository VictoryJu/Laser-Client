import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalNoticeComponent } from './normal-notice.component';

describe('NormalNoticeComponent', () => {
  let component: NormalNoticeComponent;
  let fixture: ComponentFixture<NormalNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
