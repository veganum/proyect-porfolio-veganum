import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor() {}

  getWorkExperience() {
    const data = [
      {
        years: '2023 - Actualidad',
        title: 'FrontEnd Developer',
        subtitle: 'Wairbut (Altia)',
        description:
          'Desarrollo de proyecto para Cetse (Centro Tecnológico de Seguridad).',
        aptitudes: [
          {
            color: 'red',
            technology: 'Angular',
          },
          {
            color: 'green',
            technology: 'Springboot',
          },
          {
            color: 'grey',
            technology: 'Angular Material/Taildwind',
          },
          {
            color: 'blue',
            technology: 'Oracle',
          },
          {
            color: 'yellow',
            technology: 'Node',
          },
          {
            color: 'pink',
            technology: 'Sass/Scss',
          },
        ],
      },
    ];

    return data;
  }

  getAcademicExperience() {
    const data = [
      {
        years: '2018-2020',
        title: 'Desarrollo de aplicaciones multiplataforma',
        description:
          'Impartí la FP de grado superior de DAW en iFP Grupo Planeta',
      },
      {
        years: '2017',
        title:
          'Curso de desarrollo orientado a objetos y desarrollo de aplicaciones SAP(ABAP)',
        description:
          'Aprendizaje de Conocimientos básicos en programacion,bases de datos ,ofimatica , software y hardware(SQL , HTML5 ,CSS3 ,PHP , Javascript y Java).Aprender fundamentos básicos en el paquete de soluciones SAP. Conocimiento de transacciones básicas y principios básicos de lenguaje de programación ABAP.',
      },
      {
        years: '2011-2016',
        title: 'Grado en Antropología Social y Cultural, Ciencias sociales',
        description:
          'Curse estudios universitarios en antropología en la universidad Complutense de Madrid',
      },
    ];

    return data;
  }
}
