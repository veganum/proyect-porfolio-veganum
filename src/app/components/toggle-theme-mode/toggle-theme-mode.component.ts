import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme-mode.component.html',
  styleUrls: ['./toggle-theme-mode.component.scss'],
})
export class ToggleThemeModeComponent {
  //Tipo de tema
  darkMode = true;

  constructor(@Inject(DOCUMENT) private document: Document) {
    //Llamo a document y le asigno el modo que quiero
    document.documentElement.classList.toggle('dark', this.darkMode);
  }
  //Cambio de modo
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', String(this.darkMode));
    document.documentElement.classList.toggle('dark', this.darkMode);
  }
}
