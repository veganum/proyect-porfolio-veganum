import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-social-pill',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `<a
    class="
  bg-white/5
    border dark:border-white border-teal-600 rounded-full
    flex justify-center items-center gap-x-2
    py-1 px-2 md:py-2 md:px-4
    text-xs md:text-base
    text-teal-600 dark:text-white
    transition
    hover:scale-110 hover:bg-white/10
    shadow-lg shadow-cyan-500/50
    m-1.5
  "
    [href]="link"
    target="_blank"
    rel="noopener noreferrer">
    <fa-icon [icon]="icon"></fa-icon>
    {{ nameSocial }}
  </a>`,
  styleUrl: './social-pill.component.scss',
})
export class SocialPillComponent {
  @Input() nameSocial: string | undefined;
  @Input() link: string | undefined;

  @Input() icon: any;
}
