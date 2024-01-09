import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [],
  template: `
    <h3>{{ blocked ? 'Blocked' : 'Unlocked' }}</h3>
  `,
})
export class HeavyLoadersSlowComponent {

  public blocked: boolean = true;

  constructor() {
    const start = Date.now();

    while (Date.now() - start < 3000) {
      this.blocked = false;
    }
  }
}
