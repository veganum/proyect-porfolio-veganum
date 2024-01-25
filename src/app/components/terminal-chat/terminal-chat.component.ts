import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-terminal-chat',
  templateUrl: './terminal-chat.component.html',
  styleUrls: ['./terminal-chat.component.css'],
})
export class TerminalChatComponent {
  stateTerminal: boolean = false;
  helloTimeEvent: boolean = false;
  helloTimeEventUser: boolean = false;

  terminal: { data: string } = { data: '' };

  constructor() {}

  toogleTerminal() {
    this.stateTerminal = !this.stateTerminal;
  }

  startTerminalGreeting() {
    setTimeout(() => {
      this.helloTimeEvent = true;
    }, 2000);
    setTimeout(() => {
      this.helloTimeEventUser = true;
    }, 4000);
  }

  terminalData() {
    console.log(this.terminal.data);
    if (
      this.terminal.data === 'hola' ||
      this.terminal.data === 'Hola' ||
      this.terminal.data === 'HOLA'
    ) {
      this.terminal.data = 'Buenos días Jose';
    }
    if (this.terminal.data === '/Sobre mi') {
      this.terminal.data = 'Desarrollador FrontEnd y Antropologo';
    }
    if (this.terminal.data === '/Experiencia') {
      this.terminal.data = 'Mas de 4 años';
    }
    if (this.terminal.data === '/Redes') {
      this.terminal.data = 'https://www.linkedin.com/in/jose-franco-nieto';
    }
  }
}
