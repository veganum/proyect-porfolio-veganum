/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToggleThemeModeComponent } from './toggle-theme-mode.component';

describe('ToggleThemeModeComponent', () => {
  let component: ToggleThemeModeComponent;
  let fixture: ComponentFixture<ToggleThemeModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleThemeModeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleThemeModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
