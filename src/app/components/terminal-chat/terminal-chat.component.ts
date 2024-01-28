import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { TerminalService } from '../../services/terminal.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-terminal-chat',
  templateUrl: './terminal-chat.component.html',
  styleUrls: ['./terminal-chat.component.scss'],
})
export class TerminalChatComponent {
  stateTerminal: boolean = false;
  helloTimeEvent: boolean = false;
  helloTimeEventUser: boolean = false;

  terminal = { dataInput: '', data: '' };

  commandForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private terminalService: TerminalService
  ) {
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
    if (
      this.commandForm.controls['command'].value === 'hola' ||
      this.commandForm.controls['command'].value === 'Hola' ||
      this.commandForm.controls['command'].value === 'HOLA'
    ) {
      let respuestas = [
        'Buenos días',
        'Saludos',
        'Bienvenido',
        'Aloha',
        'Hola',
      ];
      const random = Math.floor(Math.random() * respuestas.length);
      this.terminal.data = respuestas[random];
    }

    if (
      this.commandForm.controls['command'].value === 'adios' ||
      this.commandForm.controls['command'].value === 'Adios' ||
      this.commandForm.controls['command'].value === 'Hasta pronto' ||
      this.commandForm.controls['command'].value === 'Hasta luego' ||
      this.commandForm.controls['command'].value === 'chao' ||
      this.commandForm.controls['command'].value === 'Chao'
    ) {
      let respuestas = ['Hasta pronto', 'Adios'];
      const random = Math.floor(Math.random() * respuestas.length);
      this.terminal.data = respuestas[random];
    }

    if (
      this.commandForm.controls['command'].value === '/Sobre mi' ||
      this.commandForm.controls['command'].value === 'Sobre mi' ||
      this.commandForm.controls['command'].value === 'sobre mi'
    ) {
      let respuestas = [
        'Me gusta cocinar',
        'Me gusta apasiona el mundo de los videojuegos y el rol',
        'Tengo un Corgi llamado Coni',
      ];
      const random = Math.floor(Math.random() * respuestas.length);
      this.terminal.data = respuestas[random];
    }
    if (
      this.commandForm.controls['command'].value === '/Experiencia' ||
      this.commandForm.controls['command'].value === 'Experiencia' ||
      this.commandForm.controls['command'].value === 'experiencia'
    ) {
      let respuestas = [
        'Mas de 4 años de experiencia desarrollando',
        'Estudie Antropología Social y Cultural',
        'Estudie la FP Superior de Desarrollo de aplicaciones multiplataforma (DAW)',
      ];
      const random = Math.floor(Math.random() * respuestas.length);
      this.terminal.data = respuestas[random];
    }
    if (
      this.commandForm.controls['command'].value === '/Contacto' ||
      this.commandForm.controls['command'].value === 'Contacto' ||
      this.commandForm.controls['command'].value === 'contacto'
    ) {
      let respuestas = [
        'https://www.linkedin.com/in/jose-franco-nieto',
        'https://github.com/veganum',
        'https://github.com/veganum',
      ];
      const random = Math.floor(Math.random() * respuestas.length);
      this.terminal.data = respuestas[random];
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
