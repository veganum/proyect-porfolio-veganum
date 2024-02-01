import { Component } from '@angular/core';

import { LoadingComponent } from '../../components/loading/loading.component';
import { TittlePageComponent } from '../../components/tittle-page/tittle-page.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  standalone: true,
  imports: [LoadingComponent, TittlePageComponent, BreadcrumbComponent],
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  constructor() {}
}
