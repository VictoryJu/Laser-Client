import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayGameComponent } from './relay-game.component';

describe('RelayGameComponent', () => {
  let component: RelayGameComponent;
  let fixture: ComponentFixture<RelayGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
