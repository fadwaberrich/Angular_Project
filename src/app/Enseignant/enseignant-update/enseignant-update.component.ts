

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Enseignant } from 'src/app/models/Enseignant';
import { EnseignantService } from '../enseignant.service';
//import { EnseignantService } from '/enseignant.service';




@Component({
  selector: 'app-enseignant-update',
  templateUrl: './enseignant-update.component.html',
  styleUrls: ['./enseignant-update.component.scss']
})
export class EnseignantUpdateComponent implements OnInit {
 // e : Enseignant = new Enseignant();

  id: any;
  mydata$: any;
  mydata: any;
  nom :any;
  prenom :any;
  dateNaissance:any;
  sexe:any;
  dateEntree:any;
  salaire:any;
  coursId$:any;

  ensVar : Enseignant = new Enseignant();

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private ens: EnseignantService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.ensVar.id = params['id'];
    });
    //this.mydata$=  this.paiement.getbyid(this.idP);
    this.mydata=  this.ens.getbyid(this.ensVar.id).pipe(tap((data)=>(this.mydata = data)))
    ////alert(this.mydata[0].montant);
    
    this.mydata.forEach(m => {  
      this.ensVar.nom=this.mydata.nom;
      this.ensVar.prenom=this.mydata.prenom;
      this.ensVar.dateNaissance=this.mydata.dateNaissance;
      this.ensVar.sexe=this.mydata.sexe;
      this.ensVar.dateEntree=this.mydata.dateEntree;
      this.ensVar.salaire=this.mydata.salaire;
      this.ensVar.coursId=this.mydata.getcours();
    });
  }


  async onEnseignantupdate(Enseignant: {nom: string, prenom: string, dateNaissance: string,sexe:string,dateEntree:string,salaire:string,coursId:string }) {
    //Enseignant.id
    
    this.http.put('http://localhost:3000/enseignants/' + this.id, Enseignant).subscribe((response) => {
      //alert("done");
    });

    this.router.navigate(['liste_enseignant']);
    //alert(paiement.mnt);



  }





}
