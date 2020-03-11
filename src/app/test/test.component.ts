import { Component, OnInit, Input } from '@angular/core';
import { ScoreService } from '../score.service';
import { Score } from '../score';
import { Observable } from 'rxjs';  
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
  


  ObSumScore: Observable<Score[]>;  
  lstSumScore :any =[];
  SocrePointHome;
  ScorePointGuest;


  constructor(private scoreservice  :ScoreService) {
     
  }

  ngOnInit() {

    //this.getSumPoints()
    
  }

  // getSumPoints(){

  //   this.ObSumScore = this.scoreservice.getSumScore();

  //   this.ObSumScore.subscribe(x=> {

  //     if (!x) {
  //     this.SocrePointHome = x[0].ScorePoints; 
  //     this.ScorePointGuest = x[1].ScorePoints; 
  //     }
      
      
  // });
  // }
}
