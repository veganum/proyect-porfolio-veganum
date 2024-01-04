import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme-mode.component.html',
  styleUrls: ['./toggle-theme-mode.component.scss'],
})
export class ToggleThemeModeComponent {
  faMoon = faMoon;
  faSun = faSun;
  darkThemeEnabled: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.darkThemeEnabled = localStorage.getItem('darkMode') === 'false';
    }
  }

  toggleDarkTheme(): void {
    this.darkThemeEnabled = !this.darkThemeEnabled;
    localStorage.setItem('darkMode', String(this.darkThemeEnabled));
    document.body.classList.toggle('dark', this.darkThemeEnabled);
  }
}
