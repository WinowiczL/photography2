import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPriceWroclawComponent } from './session-price-wroclaw.component';

describe('SessionPriceWroclawComponent', () => {
  let component: SessionPriceWroclawComponent;
  let fixture: ComponentFixture<SessionPriceWroclawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionPriceWroclawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionPriceWroclawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
