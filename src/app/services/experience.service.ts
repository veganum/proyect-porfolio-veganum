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
          'Desarrollo de proyecto para el departamento de Frontend para Cetse (Centro Tecnológico de Seguridad).En el Front uso de Angular, Angular Material, Taildwind, SCSS. Gestión y creación de componentes para librerías internas.',
        aptitudes: [
          {
            color:
              'bg-angular-100 text-angular-800 dark:bg-angular-900 dark:text-angular-300',
            technology: 'Angular',
          },
          {
            color:
              'bg-angular-100 text-angular-800 dark:bg-angular-900 dark:text-angular-300',
            technology: 'Angular Material',
          },
          {
            color:
              'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
            technology: 'Sass/Scss',
          },
          {
            color:
              'bg-taildwind-100 text-taildwind-800 dark:bg-taildwind-900 dark:text-taildwind-300',
            technology: 'Taildwind',
          },
          {
            color:
              'bg-node-100 text-node-800 dark:bg-node-900 dark:text-node-300',
            technology: 'Node',
          },
          {
            color:
              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
            technology: 'Oracle',
          },
          {
            color:
              'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
            technology: 'Accesibilidad Web',
          },
        ],
      },
      {
        id: 2,
        years: '2022-2023',
        title: 'FullStack Developer',
        subtitle: 'Wairbut (Altia)',
        description:
          'Proyecto de aplicación para el departamento de recursos humanos, para la Dirección General de Seguros y Fondos de Pensiones con React y . Net(C#).Uso en el Frontend de React Hooks, React Router, Dom 6, Redux, TypeScript. ',
        aptitudes: [
          {
            color:
              'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
            technology: 'React',
          },
          {
            color:
              'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
            technology: 'Redux',
          },
          {
            color:
              'bg-red-100 text-neutral-800 dark:bg-red-900 dark:text-neutral-300',
            technology: 'React Router',
          },
          {
            color:
              'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
            technology: 'React-Bootstrap',
          },
          {
            color:
              'bg-[#B2F5EA] text-[#234E52] dark:bg-[#1D4044] dark:text-[#4FD1C5]',
            technology: 'Chakra UI',
          },
          {
            color: 'bg-black text-white dark:bg-white dark:text-black',
            technology: 'Next JS',
          },
          {
            color:
              'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300',
            technology: 'ASP:NET',
          },

          {
            color:
              'bg-gradient-to-r from-[#bd34fe] to-[#41d1ff] text-white dark:bg-gradient-to-r from-[#bd34fe] to-[#41d1ff] dark:text-white',
            technology: 'Vite',
          },
          {
            color:
              'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300',
            technology: 'Axios',
          },
        ],
      },
      {
        id: 3,
        years: '2020-2022',
        title: 'FullStack Developer Junior',
        subtitle: 'LCC España',
        description:
          'Mantenimiento y desarrollo de aplicaciones orientadas a las telecomunicaciones (Radio, Transmision) con Angular y Boostrap en el Frontend, SpringBoot en el Backend y SQLServer como base de datos.Habilidades en gestión y manejo en bases de datos en SQL Server. Desarrollo de procedimientos, Funciones, Jobs, Trigger. Tratamiento de datos mediante procedimientos almacenados para mayor consistencia y performance de las tablas finales y  lanzamiento de tareas recurrentes programadas. Uso de Pentaho para integrar datos en BBDD de forma recurrente.Desarrollo avanzado en librerías de gráficas ChartJS y Apache Echart. Desarrollo de Mapas usando datos Geo espaciales en BBDD, Geoserver y Leaflet.',
        aptitudes: [
          {
            color:
              'bg-angular-100 text-angular-800 dark:bg-angular-900 dark:text-angular-300',
            technology: 'Angular',
          },
          {
            color:
              'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
            technology: 'Bootstrap',
          },
          {
            color:
              'bg-spring-100 text-spring-800 dark:bg-spring-900 dark:text-spring-300',
            technology: 'Springboot',
          },
          {
            color:
              'bg-gradient-to-r from-blue-100 to-yellow-100 text-white dark:bg-gradient-to-r from-blue-900 to-yellow-900  dark:text-white',
            technology: 'Python',
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
          'Creación de Voicebots y Chatbots orientados a entornos comerciales (restaurantes, atención al cliente, agencias de viajes, etc.),  usando tecnologías asociadas al entorno de chatbot:DialogFlow ,Kommunicate, Microsoft Bot, Framework.Diseño de flujo conversacional, entrenamiento  para la mejora de la UI/UX de los Chatbot,Integración o conexión de dichas herramientas a APIS mediante el uso de Node JS y Despliegues en Google Cloud Platform.Uso de herramientas de gestión de tareas: Trello, Notion.',
        aptitudes: [
          {
            color:
              'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
            technology: 'UX Conversacional',
          },
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
          'Participación en el desarrollo de una app interna (Spring Boot + Angular 8) para la gestión y organización de los turnos y horarios de comida en la empresa (hincapié en la parte Backend).Generación en Excel del informe con los rangos de comidas y los usuarios.Configserver para la gestión de la configuración.Eureka server para la comunicación de los servicios.Desarrollo de varios microservicios  así como la comunicación entre Backend y Frontend.Pruebas API REST: POSTMAN.Metodología ágil Scrum (Tableros kanban / Azure boards).Control de versiones Git con revisión de código mediante Pull request .Test unitarios con JUnit.Ciclo de maven completo (clean, compile, install, deploy).Creación de tareas Jenkins para subir/depositar el jar final en artifactory.Creación de biblioteca de utilidades en un proyecto maven java: cálculo de fechas.Despliegue y configuracion tanto en front (Angular) como en el Back(Springboot/Maven) ',
        aptitudes: [
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
              'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
            technology: 'Java 8',
          },
          {
            color:
              'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
            technology: 'Spring Boot 2',
          },
          {
            color:
              'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
            technology: 'Maven',
          },
          {
            color:
              'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
            technology: 'Sonar Lint',
          },
          {
            color:
              'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
            technology: 'JUnit',
          },
          {
            color:
              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
            technology: 'MySQL',
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
        title: 'Desarrollo de aplicaciones multiplataforma DAW',
        description:
          'Formación profesional de grado superior orientada a aplicaciones multiplataforma. En este curso aprendí a desarrollar, implantar, y mantener aplicaciones web, móvil y de escritorio; con independencia del modelo empleado y utilizando tecnologías específicas, garantizando el acceso a los datos de forma segura y cumpliendo los criterios de accesibilidad, usabilidad y calidad exigidas en los estándares establecidos',
      },
      {
        id: 2,
        years: '2017',
        title:
          'Certificación en Desarrollo Orientado a Objetos y Desarrollo de Aplicaciones ABAP para entornos SAP.',
        description:
          'Adquisición de conocimientos de programación básicos: Ofimática, software y hardware y programación en general (SQL, HTML5, CSS3, PHP, JavaScript y Java). Aprender fundamentos básicos en el paquete de soluciones SAP. Conocimiento de transacciones básicas y principios básicos de lenguaje de programación ABAP (TERP10).',
      },
      {
        id: 3,
        years: '2011-2016',
        title: 'Grado en Antropología Social y Cultural',
        description:
          'Estudios universitarios en Antropología en la Universidad Complutense de Madrid. He adquirido conocimientos avanzados en metodologías tanto cuantitativas como cualitativas en ciencias sociales, así como técnicas y modelos de análisis e investigación social orientados en enfoques culturalistas.',
      },
    ];

    return data;
  }
}
