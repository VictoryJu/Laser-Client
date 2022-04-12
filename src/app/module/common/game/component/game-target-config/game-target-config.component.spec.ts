import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTargetConfigComponent } from './game-target-config.component';

describe('GameTargetConfigComponent', () => {
  let component: GameTargetConfigComponent;
  let fixture: ComponentFixture<GameTargetConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTargetConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTargetConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
