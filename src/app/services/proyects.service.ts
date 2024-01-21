import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getDataProyects() {
    const data = [
      {
        id: 1,
        title: 'Titulo 1',
        technology: [
          { tec: 'Javascript', imgTec: '/assets/img/js-img.gif' },
          { tec: 'Java', imgTec: '/assets/img/java-img.gif' },
          { tec: 'Sql', imgTec: '/assets/img/sql-img.png' },
          { tec: 'Javascript', imgTec: '/assets/img/js-img.gif' },
          { tec: 'Java', imgTec: '/assets/img/java-img.gif' },
          { tec: 'Sql', imgTec: '/assets/img/sql-img.png' },
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      },
      {
        id: 2,
        title: 'Titulo 2',
        technology: [
          { tec: 'Javascript', imgTec: 'assets/img/js-img.gif' },
          { tec: 'Java', imgTec: '/assets/img/java-img.gif' },
          { tec: 'Sql', imgTec: '/assets/img/sql-img.png' },
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      },
      {
        id: 3,
        title: 'Titulo 3',
        technology: [
          { tec: 'Javascript', imgTec: 'assets/img/js-img.gif' },
          { tec: 'Java', imgTec: '/assets/img/java-img.gif' },
          { tec: 'Sql', imgTec: '/assets/img/sql-img.png' },
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      },
      {
        id: 4,
        title: 'Titulo 4',
        technology: [
          { tec: 'Javascript', imgTec: 'assets/img/js-img.gif' },
          { tec: 'Java', imgTec: '/assets/img/java-img.gif' },
          { tec: 'Sql', imgTec: '/assets/img/sql-img.png' },
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      },
      {
        id: 5,
        title: 'Titulo 5',
        technology: [
          { tec: 'Javascript', imgTec: 'assets/img/js-img.gif' },
          { tec: 'Java', imgTec: '/assets/img/java-img.gif' },
          { tec: 'Sql', imgTec: '/assets/img/sql-img.png' },
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      },
      {
        id: 6,
        title: 'Titulo 6',
        technology: [
          { tec: 'Javascript', imgTec: 'assets/img/js-img.gif' },
          { tec: 'Java', imgTec: '/assets/img/java-img.gif' },
          { tec: 'Sql', imgTec: '/assets/img/sql-img.png' },
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      },
      {
        id: 7,
        title: 'Titulo 7',
        technology: [
          { tec: 'Javascript', imgTec: 'assets/img/js-img.gif' },
          { tec: 'Java', imgTec: '/assets/img/java-img.gif' },
          { tec: 'Sql', imgTec: '/assets/img/sql-img.png' },
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      },
      {
        id: 8,
        title: 'Titulo 8',
        technology: [
          { tec: 'Javascript', imgTec: 'assets/img/js-img.gif' },
          { tec: 'Java', imgTec: '/assets/img/java-img.gif' },
          { tec: 'Sql', imgTec: '/assets/img/sql-img.png' },
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      },
      {
        id: 9,
        title: 'Titulo 9',
        technology: [
          { tec: 'Javascript', imgTec: 'assets/img/js-img.gif' },
          { tec: 'Java', imgTec: '/assets/img/java-img.gif' },
          { tec: 'Sql', imgTec: '/assets/img/sql-img.png' },
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      },
    ];

    return data;
  }
}
