import { EtudiantService } from './../etudiant.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/Etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.scss']
})
export class EtudiantAddComponent implements OnInit {
etd : Etudiant = new Etudiant();
  constructor(private http: HttpClient , private service : EtudiantService,private router: Router) { }
  PATH_OF_API = 'http://localhost:3000/etudiants' ;
  mydepartement$:any;
  myequipe$:any;
  
  ngOnInit(): void {

    this.mydepartement$ =this.service.getdepartement();
    this.myequipe$ =this.service.getequipe();

  }


  add(etudiant: { nom: string, prenom: string, option: string,departementId:string,equipeId:string}) {
    console.log(etudiant);
    
    // alert(etudiant.option);
     this.http.post(this.PATH_OF_API ,etudiant).subscribe((response)=>{
       console.log(response);
     });
     this.router.navigate(['liste_etudiant']);
  }

}
