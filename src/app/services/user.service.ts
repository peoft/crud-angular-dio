import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl:string = "https://sheet.best/api/sheets/6fb3b365-1d65-4605-bc40-cf09d437171e";

  constructor(private httpClient:HttpClient) { }

  // CRUD
  // Retorna a lista de usuarios - READ
  getUsers():Observable<User[]>  {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
