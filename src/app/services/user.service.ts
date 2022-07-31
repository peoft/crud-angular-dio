import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl:string = "https://sheet.best/api/sheets/6fb3b365-1d65-4605-bc40-cf09d437171e";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  // CRUD
  // Retorna a lista de usuarios - READ
  getUsers():Observable<User[]>  {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Salva usuario no banco CREATE
  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }
}
