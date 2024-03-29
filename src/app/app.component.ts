import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// Common
import { HeaderComponent } from './components/header/header.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { TerminalChatComponent } from './components/terminal-chat/terminal-chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SocialMediaComponent,
    TerminalChatComponent,
  ],
})
export class AppComponent {
  title = 'proyect-porfolio-veganum';
}
