import { Component } from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  standalone: true,
  imports: [LoadingComponent],
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  constructor() {}
}
