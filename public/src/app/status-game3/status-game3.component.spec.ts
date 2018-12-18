import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusGame3Component } from './status-game3.component';

describe('StatusGame3Component', () => {
  let component: StatusGame3Component;
  let fixture: ComponentFixture<StatusGame3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusGame3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusGame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
