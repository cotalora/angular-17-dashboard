import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

  @Input({ required: true }) public title!: string;
  @Input({ transform: booleanAttribute }) public withShadow: boolean = false;

}
