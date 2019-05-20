import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardsHomeComponent } from './home-cards-home.component';

describe('HomeCardsHomeComponent', () => {
  let component: HomeCardsHomeComponent;
  let fixture: ComponentFixture<HomeCardsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCardsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
