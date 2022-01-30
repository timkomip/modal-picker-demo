import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './app.modles';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsersByName(name: string) {
    return this.http.get<User[]>(usersUrl, { params: { q: name } });
  }
}
