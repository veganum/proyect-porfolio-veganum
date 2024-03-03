/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TittlePageComponent } from './tittle-page.component';

describe('TittlePageComponent', () => {
  let component: TittlePageComponent;
  let fixture: ComponentFixture<TittlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TittlePageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TittlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
