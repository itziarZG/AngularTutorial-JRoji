import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  constructor(private HttpClient: HttpClient) {}

  getUsers() {
    return this.HttpClient.get('https://randomuser.me/api?results=5');
  }
}
