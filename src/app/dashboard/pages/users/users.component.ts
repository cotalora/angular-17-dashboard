import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '../../../shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, TitleComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {

  public usersService = inject(UsersService);
}
