import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  template: `<div class="absolute top-2/4 left-2/4">
    <img
      class="w-20 h-20 animate-spin"
      src="https://www.svgrepo.com/show/70469/loading.svg"
      alt="Loading icon" />
  </div>`,
  styleUrl: './loading.component.css',
})
export class LoadingComponent {}
