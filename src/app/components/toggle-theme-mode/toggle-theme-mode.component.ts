import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme-mode.component.html',
  styleUrls: ['./toggle-theme-mode.component.scss'],
})
export class ToggleThemeModeComponent {
  darkThemeEnabled: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', 'true');
      this.darkThemeEnabled = localStorage.getItem('darkMode') === 'false';
    }
  }

  toggleDarkTheme(): void {
    this.darkThemeEnabled = !this.darkThemeEnabled;
    localStorage.setItem('darkMode', String(this.darkThemeEnabled));
    document.body.classList.toggle('dark', this.darkThemeEnabled);
  }
}
