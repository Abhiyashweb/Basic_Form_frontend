import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'http://127.0.0.1:5000';  

  constructor(private http: HttpClient) {}

  
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  
  addUser(user: User): Observable<any> {
    console.log("🔹 Sending Data:", user);  
    return this.http.post(`${this.apiUrl}/submit`, user, { 
      headers: this.getHeaders(), 
      withCredentials: true  
    });
  }

  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`, { withCredentials: true });
  }

  
  updateUser(userId: number, updatedUser: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${userId}`, updatedUser, { 
      headers: this.getHeaders(), 
      withCredentials: true 
    });
  }

  
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${userId}`, { withCredentials: true });
  }
}
