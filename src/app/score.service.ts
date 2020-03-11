import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';  
import { Score } from './score';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  url = 'http://localhost:63366/Api';  

  constructor(private http: HttpClient) { }

  data ;

 public  getAllScore(): Observable<Score[]> { 
    
    return this.http.get<Score[]>(this.url+'/values');  
  }  


  InsertScore(nbscore: Score): Observable<Score> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Score>(this.url+'/values',nbscore, httpOptions);  
  }  

  public  getSumScore(): Observable<Score[]> { 
    
    return this.http.get<Score[]>(this.url+'/values/SumPoints');  
  }  


}
