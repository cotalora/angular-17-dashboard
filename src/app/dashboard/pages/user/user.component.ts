import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '../../../shared/title/title.component';
import { User } from '../../../interfaces/request-response.interface';
import { switchMap } from 'rxjs/operators';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => 
        this.userService.getUserById(id)
      )
    )
  )
}
