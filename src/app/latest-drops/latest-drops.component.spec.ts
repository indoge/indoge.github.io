import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestDropsComponent } from './latest-drops.component';

describe('LatestDropsComponent', () => {
  let component: LatestDropsComponent;
  let fixture: ComponentFixture<LatestDropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestDropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestDropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
