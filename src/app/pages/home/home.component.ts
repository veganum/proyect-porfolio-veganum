import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, LoadingComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  heroImg = '../../../assets/img/foto-carnet.webp';
}
