import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  standalone: true,
  imports: [TitleComponent, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.css'
})
export default class DeferViewsComponent {

}
