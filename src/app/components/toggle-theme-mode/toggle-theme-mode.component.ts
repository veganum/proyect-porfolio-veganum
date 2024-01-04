import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme-mode.component.html',
  styleUrls: ['./toggle-theme-mode.component.css'],
})
export class ToggleThemeModeComponent {
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
