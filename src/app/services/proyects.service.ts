import { Injectable } from '@angular/core';

interface ITec {
  tec: string;
  imgTec: string;
}
interface IProjects {
  id: number;
  title: string;
  technology: ITec[];
  text: string;
  img: string;
  url: string;
  repo: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getDataProyects() {
    const data: IProjects[] = [
      {
        id: 1,
        title: 'Theming Angular Material',
        technology: [
          {
            tec: 'Angular',
            imgTec:
              'https://miro.medium.com/v2/resize:fit:1050/0*UC-tiSyyd6b2JNaA',
          },
        ],
        text: 'Plantilla para crear temas en Angular Material',
        img: '../../assets/img/angular_material_theming.webp',
        url: 'https://veganum.github.io/angular-material-theming-example/',
        repo: 'https://github.com/veganum/angular-material-theming-example',
      },
      {
        id: 2,
        title: 'Arkanoid',
        technology: [{ tec: 'Javascript', imgTec: 'assets/img/js-img.gif' }],
        text: 'Single Page Aplication en React',
        img: '../../assets/img/arkanoid.jpg',
        url: 'https://veganum.github.io/arkanoid-game/',
        repo: 'https://github.com/veganum/arkanoid-game',
      },
      {
        id: 3,
        title: 'Telegram-bot',
        technology: [{ tec: 'Javascript', imgTec: 'assets/img/js-img.gif' }],
        text: 'Bot para telegram',
        img: '',
        url: '',
        repo: 'https://github.com/veganum/Telegram-bot_example/',
      },
      {
        id: 4,
        title: 'Twitch-bot',
        technology: [{ tec: 'Javascript', imgTec: 'assets/img/js-img.gif' }],
        text: 'Bot para twitch',
        img: '',
        url: '',
        repo: 'https://github.com/veganum/Twitch-bot',
      },

      // {
      //   id: 9,
      //   title: 'Titulo 9',
      //   technology: [
      //     { tec: 'Javascript', imgTec: 'assets/img/js-img.gif' },
      //     { tec: 'Java', imgTec: '/assets/img/java-img.gif' },
      //     { tec: 'Sql', imgTec: '/assets/img/sql-img.png' },
      //   ],
      //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
      //   img: '../../assets/img/proyect-img.webp',
      //   url: 'https://github.com/veganum/angular-material-theming-example',
      // },
    ];

    return data;
  }
}
