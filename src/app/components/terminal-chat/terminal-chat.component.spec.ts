/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TerminalChatComponent } from './terminal-chat.component';

describe('TerminalChatComponent', () => {
  let component: TerminalChatComponent;
  let fixture: ComponentFixture<TerminalChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TerminalChatComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
