import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameZeroConfigComponent } from './game-zero-config.component';

describe('GameZeroConfigComponent', () => {
  let component: GameZeroConfigComponent;
  let fixture: ComponentFixture<GameZeroConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameZeroConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameZeroConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
