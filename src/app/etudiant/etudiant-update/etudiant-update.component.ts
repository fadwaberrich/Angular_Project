import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { EnseignantService } from 'src/app/Enseignant/enseignant.service';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant-update',
  templateUrl: './etudiant-update.component.html',
  styleUrls: ['./etudiant-update.component.scss']
})
export class EtudiantUpdateComponent implements OnInit {
  etd : Etudiant = new  Etudiant();
  id: any;
  mydata$: any;
  mydata: any;
  nom :any;
  prenom :any;
  option:any;
  myequipe$:any;
  mydepartement$:any;

  etVar : Etudiant = new Etudiant();

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private etu: EtudiantService) { }

  ngOnInit() : void {
    this.route.queryParams.subscribe(params => {
      this.etVar.id = params['id'];
    });
    //this.mydata$=  this.paiement.getbyid(this.idP);
    this.mydata=  this.etu.getbyid(this.etVar.id).pipe(tap((data)=>(this.mydata = data)))
    ////alert(this.mydata[0].montant);
    this.mydepartement$=this.etu.getdepartement();
    this.myequipe$=this.etu.getequipe();
    this.mydata.forEach(m => {  
      this.etVar.nom=this.mydata.nom;
      this.etVar.prenom=this.mydata.prenom;
      this.etVar.option=this.mydata.option;
      this.etVar.equipeId=this.mydata.equipeId;
      this.etVar.departementId=this.mydata.departementId;
    });
  }
  async onEtudiantupdate(Etudiant: {nom: string, prenom: string, option: string,equipeId:string,departementId:string }) {
    //Enseignant.id
    
    this.http.put('http://localhost:3000/etudiants/' + this.etVar.id, Etudiant).subscribe((response) => {
      this.router.navigate(['liste_etudiant']);
      //alert("done");
    });

    this.router.navigate(['liste_etudiant']);
    //alert(paiement.mnt);



  }
}
