import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/models/Enseignant';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-enseignant-add',
  templateUrl: './enseignant-add.component.html',
  styleUrls: ['./enseignant-add.component.scss']
})
export class EnseignantAddComponent implements OnInit {
  ens : Enseignant = new Enseignant();
  constructor(private http: HttpClient,private router: Router , private service : EnseignantService) { }
  PATH_OF_API = 'http://localhost:3000/enseignants' ;
  coursId$:any;
  ngOnInit(): void {
    this.coursId$ =this.service.getcours();
  
  }
  
  onProductCreate(Enseignant: {nom: String,prenom: string,dateNaissance:Date,sexe :Sexe,dateEntree :Date,salaire :Number,coursId:string}){
    console.log(Enseignant);
    
    // alert(etudiant.option);
     this.http.post(this.PATH_OF_API ,Enseignant).subscribe((response)=>{
       console.log(response);
     });
     this.router.navigate(['liste_enseignant']);
   }


   //alert(paiement.mnt);


}

enum Sexe{
  Homme = 0,
  Femme = 1,
}