import { Component } from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [LoadingComponent, CommonModule],
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  tabIndex: string = 'Trabajo';

  constructor() {}

  openCity(event: any) {
    this.tabIndex = event;
  }
}
