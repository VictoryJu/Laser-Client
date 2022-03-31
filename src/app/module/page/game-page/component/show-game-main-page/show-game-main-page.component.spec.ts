import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGameMainPageComponent } from './show-game-main-page.component';

describe('ShowGameMainPageComponent', () => {
  let component: ShowGameMainPageComponent;
  let fixture: ComponentFixture<ShowGameMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGameMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGameMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
