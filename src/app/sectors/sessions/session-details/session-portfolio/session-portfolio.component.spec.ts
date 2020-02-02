import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPortfolioComponent } from './session-portfolio.component';

describe('SessionPortfolioComponent', () => {
  let component: SessionPortfolioComponent;
  let fixture: ComponentFixture<SessionPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
