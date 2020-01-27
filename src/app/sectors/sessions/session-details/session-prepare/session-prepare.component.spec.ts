import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPrepareComponent } from './session-prepare.component';

describe('SessionPrepareComponent', () => {
  let component: SessionPrepareComponent;
  let fixture: ComponentFixture<SessionPrepareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionPrepareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionPrepareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
