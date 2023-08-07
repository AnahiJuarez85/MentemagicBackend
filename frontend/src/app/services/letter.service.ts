import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { letrasI } from '../models/letter';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LetterService {
  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) { }

  createLetter(letter: letrasI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/createLetter`, letter);
  }

  readLetter(){
    return this.httpClient.get(`${this.AUTH_SERVER}/readLetters`);
  }

}
