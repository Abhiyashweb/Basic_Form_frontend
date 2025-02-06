import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'http://127.0.0.1:5000'; // Flask API Base URL

  constructor(private http: HttpClient) {}

  // Submit user data
  addUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, user);
  }

  // Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }


  
}
