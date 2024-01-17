import { Component } from '@angular/core';

import { LoadingComponent } from '../../components/loading/loading.component';
import { TittlePageComponent } from '../../components/tittle-page/tittle-page.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  standalone: true,
  imports: [LoadingComponent, TittlePageComponent, BreadcrumbComponent],
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor() {}
}
