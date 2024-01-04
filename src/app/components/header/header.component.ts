import { Component } from '@angular/core';
import { ToggleThemeModeComponent } from '../toggle-theme-mode/toggle-theme-mode.component';

@Component({
  standalone: true,
  imports: [ToggleThemeModeComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {}
}
