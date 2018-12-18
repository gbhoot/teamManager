import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusGame2Component } from './status-game2.component';

describe('StatusGame2Component', () => {
  let component: StatusGame2Component;
  let fixture: ComponentFixture<StatusGame2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusGame2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
