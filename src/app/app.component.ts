import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Score } from './score';
import { ScoreService } from './score.service';
import { Observable } from 'rxjs/internal/Observable';
import { NgForm } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 //////////////////globle valiable ////////////////////////

 public now: Date = new Date();
 title = 'Score';
 
 CurTeam;
 selectedLevel;
 selectedValue;
 status: boolean = false;
 
 qtr = [1,2,3,4];

 ObsScore: Observable<Score[]>;  
 ObSumScore: Observable<Score[]>;  
 lstScore :any = [];
 lstSumScore :any =[];
 IsHome:boolean = false;

  SocrePointHome = 0;
  ScorePointGuest = 0



//////////////////globle valiable ////////////////////////

loadalldata(){

    this.ObsScore = this.scoreservice.getAllScore();

     this.ObsScore.subscribe(x=> this.lstScore=x);
}

loadsumpoints(){

  this.ObSumScore =  this.scoreservice.getSumScore();

  this.ObSumScore.subscribe(x=> {

  if(x.length > 0)
  {
    
    if (x[0].TeamID==14) {
     this.SocrePointHome = x[0].ScorePoints; 
      
     if (x[1]!=undefined) {
       this.ScorePointGuest = x[1].ScorePoints; 
     }
     
    }
    if (x[0].TeamID==12) {
      
     this.ScorePointGuest = x[0].ScorePoints;
      if (x[1]!=undefined) {
       this.SocrePointHome = x[1].ScorePoints;  
      } 
      }

     
  } 
   
 });

}


  ngOnInit(): void {

  this.loadalldata();
  this.loadsumpoints();

    //  this.ObsScore = this.scoreservice.getAllScore();

    //  this.ObsScore.subscribe(x=> this.lstScore=x);
     //var my =  document.getElementById("ddlQtrId")

    
  }
 
  constructor (private myscore : Score,private scoreservice  :ScoreService){

    setInterval(() => {
      this.now = new Date();
      }, 1);
      //this.loadalldata();
   }

   myClickFunction(event) 
   { 

    this.status = !this.status; 
   }


   logForm(myform: NgForm) {

    


    if(this.status){
      
      //guest Team 
      this.CurTeam = 12;

    }else{
      // home team
      this.CurTeam = 14;

    }

   // console.log(myform.value);

  // alert((document.getElementById("hiddtime") as HTMLInputElement).value);
   

    this.myscore.Description = myform.value.txtDescId;
    this.myscore.ScorePoints = +this.selectedValue;
    // this.myscore.ScoreTime = document.getElementById("lbltimer").innerHTML;
    this.myscore.ScoreTime = (document.getElementById("hiddtime") as HTMLInputElement).value;
    this.myscore.TeamID = this.CurTeam;
    this.myscore.GameId = +(document.getElementById("txtGameId") as HTMLInputElement).value;
    this.myscore.Qtr = +this.selectedLevel;

    

    this.scoreservice.InsertScore(this.myscore).subscribe(x=>{
      
      myform.reset();
      
       this.ngOnInit();
    
      myform.value.txtDescId = "";
      myform.value.txtScoreId = "";
      // this.selectedLevel ="0";
      // this.selectedValue ="0";
    
    
    });

   


    

  }

  
}
