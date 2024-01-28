import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { log } from 'console';
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-terminal-chat',
  templateUrl: './terminal-chat.component.html',
  styleUrls: ['./terminal-chat.component.css'],
})
export class TerminalChatComponent {
  stateTerminal: boolean = false;
  helloTimeEvent: boolean = false;
  helloTimeEventUser: boolean = false;

  terminal = { dataInput: '', data: '' };

  commandForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.commandForm = this.formBuilder.group({
      command: [''],
    });
  }

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
      this.commandForm.controls['command'].value === 'hola' ||
      this.commandForm.controls['command'].value === 'Hola' ||
      this.commandForm.controls['command'].value === 'HOLA'
    ) {
      this.terminal.data = 'Buenos días Jose';
    }
    if (this.commandForm.controls['command'].value === '/Sobre mi') {
      this.terminal.data = 'Desarrollador FrontEnd y Antropologo';
    }
    if (this.commandForm.controls['command'].value === '/Experiencia') {
      this.terminal.data = 'Mas de 4 años';
    }
    if (this.commandForm.controls['command'].value === '/Redes') {
      this.terminal.data = 'https://www.linkedin.com/in/jose-franco-nieto';
    }
  }

  onSubmit(event: Event) {
    // Evitar el comportamiento predeterminado del formulario al presionar "Enter"
    event.preventDefault();

    // Verificar si el formulario es nulo antes de acceder a sus propiedades
    if (this.commandForm) {
      const command = this.commandForm.get('command')?.value;
      // Resto del código...
    }

    console.log(this.commandForm.controls['command'].value);
  }
}
