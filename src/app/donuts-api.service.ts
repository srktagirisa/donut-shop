import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutDetails, Donuts, Result } from './interfaces/donuts-api-model';

@Injectable({
  providedIn: 'root'
})
export class DonutsApiService {

  constructor(private http:HttpClient) { }

  fetchDonutsList(): Observable<Donuts> {
    return this.http.get<Donuts>("https://grandcircusco.github.io/demo-apis/donuts.json");
  }
  
  fetchDonutDetails(id: number): Observable<DonutDetails> {
    console.log('id: '+id);
    return this.http.get<DonutDetails>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`);
  }

}