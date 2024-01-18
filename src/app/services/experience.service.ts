import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor() {}

  getWorkExperience() {
    //! Falta Experiencia Laboral
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
            color: 'red',
            technology: 'Angular Material',
          },
          {
            color: 'vulcan',
            technology: 'Taildwind',
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
      {
        years: '2022-2023',
        title: 'FullStack Developer',
        subtitle: 'Wairbut (Altia)',
        description:
          'Proyecto para la Dirección General de Seguros y Fondos de Pensiones con React y .Net(C#) . React Hooks, React Router, Dom 6, Redux, TypeScript.Proyecto para la Dirección General de Seguros y Fondos de Pensiones con React y .Net(C#)',
        aptitudes: [
          {
            color: 'cyan',
            technology: 'React',
          },
          {
            color: 'violet',
            technology: 'ASP:NET',
          },
          {
            color: 'gray',
            technology: 'React-Bootstrap',
          },
          {
            color: 'purple',
            technology: 'Redux',
          },
        ],
      },
      {
        years: '2020-2022',
        title: 'FullStack Developer Junior',
        subtitle: 'LCC España',
        description:
          'Manejo de base de datos con SQLServer y creación de PLC.Springboot y documentación de API con Swagger.Angular.Boostrap',
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
            color: 'gray',
            technology: 'Bootstrap',
          },
          {
            color: 'blue',
            technology: 'SQL Server',
          },
          {
            color: 'yellow',
            technology: 'GeoServer / Leaflet js',
          },
          {
            color: 'pink',
            technology: 'ChartJS / Apache ECharts',
          },
        ],
      },
      {
        years: '2020-2022',
        title: 'Chatbot Developer Junior',
        subtitle: 'BotsLovers',
        description:
          'Creación de VoiceBots y ChatBots con DialogFlow para redes sociales, comercios, restaurantes .',
        aptitudes: [
          {
            color: 'yellow',
            technology: 'Dialogflow',
          },
          {
            color: 'green',
            technology: 'Node.js',
          },
          {
            color: 'blue',
            technology: 'Trello',
          },
          {
            color: 'gray',
            technology: 'Notion',
          },
        ],
      },
      {
        years: '2019-2020',
        title: 'Desarrollador junior',
        subtitle: 'Metrica Consulting, S.L',
        description:
          'Participando en el desarrollo de una app interna (Springboot + Angular 8) para la gestión y organización de los turnos y horarios de comida en la empresa (hincapié en la parte backend). Generación en excel del informe con los rangos de comidas y los usuarios. Configserver para la gestión de la configuración. Eureka server para la comunicación de los servicios. -Desarrollo de varios microservicios haciendo hincapié en la parte front y las vistas y usuarios, así como la comunicación con el backend.Participación en análisis y estimación de los desarrollos. Pruebas API REST: POSTMAN. -Metodología agile Scrum (Tableros kanban / azure boards). Control de versiones Git con revisión de código mediante pullrequest (Múltiples ramas: master, development...) y unificación y control del proyecto. Test unitarios con JUnit.  Ciclo de maven completo (clean, compile, install, deploy). Creación de tareas Jenkins para subir/depositar el jar final en artifactory. Creación de biblioteca de utilidades en un proyecto maven java: cálculo de fechas. Despliegue tanto en el front como en el back con sus respectivas configuraciones en el pom y en el aplication properties y en angular .json.',
        aptitudes: [
          {
            color: 'blue',
            technology: 'MySQL',
          },
          {
            color: 'green',
            technology: 'Spring Boot 2: Spring data ,JPA',
          },
          {
            color: 'yellow',
            technology: 'Java 8',
          },
          {
            color: 'red',
            technology: 'Angular 8 + Bootstrap 4',
          },
          {
            color: 'pink',
            technology: 'Sonar Lint',
          },
          {
            color: 'indigo',
            technology: 'Maven',
          },
          {
            color: 'purple',
            technology: 'JUnit',
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
