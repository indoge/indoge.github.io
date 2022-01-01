import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElonDogeTweetsComponent } from './elon-doge-tweets.component';

describe('ElonDogeTweetsComponent', () => {
  let component: ElonDogeTweetsComponent;
  let fixture: ComponentFixture<ElonDogeTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElonDogeTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElonDogeTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
