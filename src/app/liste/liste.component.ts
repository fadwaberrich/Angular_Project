import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { EtudiantService } from '../etudiant/etudiant.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  mydata: any;
  mydata$: any;
  
  constructor(private etudiants : EtudiantService) { 

  }

  ngOnInit(): void {
    //get test
    this.mydata$=  this.etudiants.getData();
   // this.mydata$=  this.etudiants.getData().pipe(tap((data)=>(this.mydata = data)))
    //alert(this.mydata);
    // data hedhi is only for show on html in case u want to use the fetched data here add .pipe/tap example 
    
    
  }
  // post test
  posttest()
  {
    alert("hello");
  }

}
