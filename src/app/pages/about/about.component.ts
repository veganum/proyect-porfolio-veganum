import { Component } from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  standalone: true,
  imports: [LoadingComponent],
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor() {}
}
