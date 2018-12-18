import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusGame1Component } from './status-game1.component';

describe('StatusGame1Component', () => {
  let component: StatusGame1Component;
  let fixture: ComponentFixture<StatusGame1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusGame1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusGame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
