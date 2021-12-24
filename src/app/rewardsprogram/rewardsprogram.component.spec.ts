import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsprogramComponent } from './rewardsprogram.component';

describe('RewardsprogramComponent', () => {
  let component: RewardsprogramComponent;
  let fixture: ComponentFixture<RewardsprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsprogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
