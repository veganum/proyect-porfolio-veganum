import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TerminalService {
  vocabularyData = [
    {
      id: 1,
      name: 'saludo',
      input: ['Hola', 'hola', 'Hola', 'Buenos días', 'Saludos'],
      output: ['Buenos días Usuario', 'Hola, Encantado de conocerte'],
    },
    {
      id: 2,
      name: 'despedida',
      input: ['Chao', 'chao', 'Adios', 'adios'],
      output: ['Adios', 'Hasta Pronto'],
    },
  ];

  constructor() {}

  // terminalData() {
  //   console.log(this.terminal.data);
  //   if (
  //     this.commandForm.controls['command'].value === 'hola' ||
  //     this.commandForm.controls['command'].value === 'Hola' ||
  //     this.commandForm.controls['command'].value === 'HOLA'
  //   ) {
  //     this.terminal.data = 'Buenos días Jose';
  //   }
  //   if (this.commandForm.controls['command'].value === '/Sobre mi') {
  //     this.terminal.data = 'Desarrollador FrontEnd y Antropologo';
  //   }
  //   if (this.commandForm.controls['command'].value === '/Experiencia') {
  //     this.terminal.data = 'Mas de 4 años';
  //   }
  //   if (this.commandForm.controls['command'].value === '/Redes') {
  //     this.terminal.data = 'https://www.linkedin.com/in/jose-franco-nieto';
  //   }
  // }
}
