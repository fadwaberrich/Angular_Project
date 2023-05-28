import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoursService } from '../cours.service';
import { tap } from 'rxjs';
import { Cours } from 'src/app/models/cours';

@Component({
  selector: 'app-cours-update',
  templateUrl: './cours-update.component.html',
  styleUrls: ['./cours-update.component.scss']
})
export class CoursUpdateComponent implements OnInit {
  c : Cours = new Cours();

  mydata: any;
  mydata$: any;

  nom: any;
  id!: any;
  credits:any;
  nbHeures:any;
  description:any;
  annee:any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router,private cours:CoursService) { }

  PATH_OF_API = 'http://localhost:3000/cours' ;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.mydata$=  this.cours.getbyid(this.id);
    this.mydata=  this.cours.getbyid(this.id).pipe(tap((data)=>(this.mydata = data)))
    ////alert(this.mydata[0].montant);
    
    this.mydata.forEach(m => {  
      this.nom=this.mydata.nom;
      this.c.description=this.mydata.description;
      this.c.credits=this.mydata.credits;
      this.c.nbHeures=this.mydata.nbHeures;
      this.c.annee=this.mydata.annee;

    });
      //this.montant=1400;
 
    //alert(this.montant);

  }

  async oncoursupdate(cours: { id: any, Nom: string, description: String,credit: string, nbHeures: string,annee: string })  {
    
    this.http.put(this.PATH_OF_API +"/" +this.id, cours).subscribe((response) => {
      //alert("done");
    });

    this.router.navigate(['liste_cours']);
    //alert(paiement.mnt);

}


}