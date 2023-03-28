import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysNewsComponent } from './todays-news.component';

describe('TodaysNewsComponent', () => {
  let component: TodaysNewsComponent;
  let fixture: ComponentFixture<TodaysNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
