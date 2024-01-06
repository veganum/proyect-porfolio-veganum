import { Component } from '@angular/core';
import { ToggleThemeModeComponent } from '../toggle-theme-mode/toggle-theme-mode.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faArrowUpRightDots,
  faIdCard,
  faDiagramProject,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  imports: [ToggleThemeModeComponent, FontAwesomeModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  home = faHome;
  usuario = faUser;
  experiencia = faArrowUpRightDots;
  proyect = faDiagramProject;
  contacto = faIdCard;

  constructor() {}
}
