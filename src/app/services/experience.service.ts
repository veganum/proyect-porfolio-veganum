import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor() {}

  getWorkExperience() {
    const data: any = [
      {
        id: 1,
        years: '2023 - Actualidad',
        title: 'FrontEnd Developer',
        subtitle: 'Wairbut (Altia)',
        description:
          'Desarrollo de proyecto para Cetse (Centro Tecnológico de Seguridad).',
        aptitudes: [
          {
            color:
              'bg-angular-100 text-angular-800 dark:bg-angular-900 dark:text-angular-300',
            technology: 'Angular',
          },
          {
            color:
              'bg-spring-100 text-spring-800 dark:bg-spring-900 dark:text-spring-300',
            technology: 'Springboot',
          },

          {
            color:
              'bg-taildwind-100 text-taildwind-800 dark:bg-taildwind-900 dark:text-taildwind-300',
            technology: 'Taildwind',
          },
          {
            color:
              'bg-angular-100 text-angular-800 dark:bg-angular-900 dark:text-angular-300',
            technology: 'Angular Material',
          },
          {
            color:
              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
            technology: 'Oracle',
          },
          {
            color:
              'bg-node-100 text-node-800 dark:bg-node-900 dark:text-node-300',
            technology: 'Node',
          },
          {
            color:
              'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
            technology: 'Sass/Scss',
          },
        ],
      },
      {
        id: 2,
        years: '2022-2023',
        title: 'FullStack Developer',
        subtitle: 'Wairbut (Altia)',
        description:
          'Proyecto para la Dirección General de Seguros y Fondos de Pensiones con React y .Net(C#) . React Hooks, React Router, Dom 6, Redux, TypeScript.Proyecto para la Dirección General de Seguros y Fondos de Pensiones con React y .Net(C#)',
        aptitudes: [
          {
            color:
              'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
            technology: 'React',
          },
          {
            color:
              'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300',
            technology: 'ASP:NET',
          },
          {
            color:
              'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
            technology: 'React-Bootstrap',
          },
          {
            color:
              'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
            technology: 'Redux',
          },
        ],
      },
      {
        id: 3,
        years: '2020-2022',
        title: 'FullStack Developer Junior',
        subtitle: 'LCC España',
        description:
          'Manejo de base de datos con SQLServer y creación de PLC.Springboot y documentación de API con Swagger.Angular.Boostrap',
        aptitudes: [
          {
            color:
              'bg-angular-100 text-angular-800 dark:bg-angular-900 dark:text-angular-300',
            technology: 'Angular',
          },
          {
            color:
              'bg-spring-100 text-spring-800 dark:bg-spring-900 dark:text-spring-300',
            technology: 'Springboot',
          },
          {
            color:
              'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
            technology: 'Bootstrap',
          },
          {
            color:
              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
            technology: 'SQL Server',
          },
          {
            color:
              'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
            technology: 'Leaflet js',
          },
          {
            color:
              'bg-geoserver-100 text-geoserver-800 dark:bg-geoserver-900 dark:text-geoserver-300',
            technology: 'GeoServer',
          },
          {
            color:
              'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
            technology: 'ChartJS / Apache ECharts',
          },
        ],
      },
      {
        id: 4,
        years: '2020-2022',
        title: 'Chatbot Developer Junior',
        subtitle: 'BotsLovers',
        description:
          'Creación de VoiceBots y ChatBots con DialogFlow para redes sociales, comercios, restaurantes .',
        aptitudes: [
          {
            color:
              'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
            technology: 'Dialogflow',
          },
          {
            color:
              'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
            technology: 'Node.js',
          },
          {
            color:
              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
            technology: 'Trello',
          },
          {
            color:
              'border-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
            technology: 'Notion',
          },
        ],
      },
      {
        id: 5,
        years: '2019-2020',
        title: 'Desarrollador junior',
        subtitle: 'Metrica Consulting, S.L',
        description:
          'Participando en el desarrollo de una app interna (Springboot + Angular 8) para la gestión y organización de los turnos y horarios de comida en la empresa (hincapié en la parte backend). Generación en excel del informe con los rangos de comidas y los usuarios. Configserver para la gestión de la configuración. Eureka server para la comunicación de los servicios. -Desarrollo de varios microservicios haciendo hincapié en la parte front y las vistas y usuarios, así como la comunicación con el backend.Participación en análisis y estimación de los desarrollos. Pruebas API REST: POSTMAN. -Metodología agile Scrum (Tableros kanban / azure boards). Control de versiones Git con revisión de código mediante pullrequest (Múltiples ramas: master, development...) y unificación y control del proyecto. Test unitarios con JUnit.  Ciclo de maven completo (clean, compile, install, deploy). Creación de tareas Jenkins para subir/depositar el jar final en artifactory. Creación de biblioteca de utilidades en un proyecto maven java: cálculo de fechas. Despliegue tanto en el front como en el back con sus respectivas configuraciones en el pom y en el aplication properties y en angular .json.',
        aptitudes: [
          {
            color:
              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
            technology: 'MySQL',
          },
          {
            color:
              'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
            technology: 'Spring Boot 2: Spring data ,JPA',
          },
          {
            color:
              'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
            technology: 'Java 8',
          },
          {
            color:
              'bg-angular-100 text-angular-800 dark:bg-angular-900 dark:text-angular-300',
            technology: 'Angular 8',
          },
          {
            color:
              'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
            technology: 'Bootstrap 4',
          },
          {
            color:
              'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
            technology: 'Sonar Lint',
          },
          {
            color:
              'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
            technology: 'Maven',
          },
          {
            color:
              'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
            technology: 'JUnit',
          },
        ],
      },
    ];

    return data;
  }

  getAcademicExperience() {
    const data: any[] = [
      {
        id: 1,
        years: '2018-2020',
        title: 'Desarrollo de aplicaciones multiplataforma',
        description:
          'Impartí la FP de grado superior de DAW en iFP Grupo Planeta',
      },
      {
        id: 2,
        years: '2017',
        title:
          'Curso de desarrollo orientado a objetos y desarrollo de aplicaciones SAP(ABAP)',
        description:
          'Aprendizaje de Conocimientos básicos en programacion,bases de datos ,ofimatica , software y hardware(SQL , HTML5 ,CSS3 ,PHP , Javascript y Java).Aprender fundamentos básicos en el paquete de soluciones SAP. Conocimiento de transacciones básicas y principios básicos de lenguaje de programación ABAP.',
      },
      {
        id: 3,
        years: '2011-2016',
        title: 'Grado en Antropología Social y Cultural, Ciencias sociales',
        description:
          'Curse estudios universitarios en antropología en la universidad Complutense de Madrid',
      },
    ];

    return data;
  }
}
