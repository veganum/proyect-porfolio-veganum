import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-tittle-page',
  templateUrl: './tittle-page.component.html',
  styleUrls: ['./tittle-page.component.css'],
})
export class TittlePageComponent {
  constructor() {}

  @Input() titlePage: string | undefined;
  @Input() iconPage: string | undefined;
}
