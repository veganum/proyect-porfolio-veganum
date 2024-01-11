import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LoadingComponent } from '../../components/loading/loading.component';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { SocialPillComponent } from '../../components/social-pill/social-pill.component';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, LoadingComponent, SocialPillComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  heroImg = '../../../assets/img/foto-carnet.webp';
  linkedin = faLinkedin;
  github = faGithub;
  mail = faEnvelope;
  curriculum = faIdCard;
}
