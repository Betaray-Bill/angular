import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http:HttpClient) {
    
  }

  public getJoke(category:string){
    return this.http.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
  }
}
