import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '../interfaces/request-response.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.httpClient.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1500))
      .subscribe(({ data }) => {
        this.#state.set({
          loading: false,
          users: data,
        })
      })
  }

  public getUserById(id: string): Observable<User> {
    return this.httpClient.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map(({ data }) => data)
      )
  }
}
