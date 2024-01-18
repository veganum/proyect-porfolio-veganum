import { Component } from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { TittlePageComponent } from '../../components/tittle-page/tittle-page.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ExperienceService } from '../../services/experience.service';
import { log } from 'console';

@Component({
  standalone: true,
  imports: [
    LoadingComponent,
    CommonModule,
    TittlePageComponent,
    BreadcrumbComponent,
  ],
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  tabIndex: string = 'Trabajo';

  estudios: any[] = [];
  trabajos: any[] = [];

  constructor(private experienceService: ExperienceService) {
    this.estudios = experienceService.getAcademicExperience();
    this.trabajos = experienceService.getWorkExperience();
  }

  openCity(event: any) {
    this.tabIndex = event;
  }
}
