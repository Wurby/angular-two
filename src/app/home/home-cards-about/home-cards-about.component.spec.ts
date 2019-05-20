import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardsAboutComponent } from './home-cards-about.component';

describe('HomeCardsAboutComponent', () => {
  let component: HomeCardsAboutComponent;
  let fixture: ComponentFixture<HomeCardsAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCardsAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
