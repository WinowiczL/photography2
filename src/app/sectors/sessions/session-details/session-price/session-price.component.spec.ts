import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPriceComponent } from './session-price.component';

describe('SessionPriceComponent', () => {
  let component: SessionPriceComponent;
  let fixture: ComponentFixture<SessionPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
