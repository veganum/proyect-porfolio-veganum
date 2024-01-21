import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ProjectsService } from '../../services/proyects.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';
import { TittlePageComponent } from '../../components/tittle-page/tittle-page.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  standalone: true,
  imports: [
    LoadingComponent,
    FontAwesomeModule,
    CommonModule,
    TittlePageComponent,
    BreadcrumbComponent,
  ],
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectsComponent {
  data: any[] = [];
  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  faAngleLeft = faAngleLeft;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  faAngleRight = faAngleRight;
  faGithub = faGithub;

  constructor(private projectsService: ProjectsService) {
    this.data = projectsService.getDataProyects();
  }

  public scrollBegin(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: 0, behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 500,
      behavior: 'smooth',
    });
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 500,
      behavior: 'smooth',
    });
  }

  public scrollLast(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left:
        this.widgetsContent.nativeElement.scrollLeft + 500 * this.data.length,
      behavior: 'smooth',
    });
  }
}
