import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { DepartementService } from '../departement.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-departement-update',
  templateUrl: './departement-update.component.html',
  styleUrls: ['./departement-update.component.scss']
})
export class DepartementUpdateComponent implements OnInit {
  d : Departement = new Departement();


  id: any;
  mydata$: any;
  mydata: any;
  nom :any;
  myuniversite$:any;

  depVar : Departement = new Departement();

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private dep: DepartementService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.depVar.id = params['id'];
      this.myuniversite$ =this.dep.getuniversite();
    });
  
    this.mydata=  this.dep.getbyid(this.depVar.id).pipe(tap((data)=>(this.mydata = data)))
    ////alert(this.mydata[0].montant);
    
    this.mydata.forEach(m => {  
      this.depVar.nom=this.mydata.nom;
      this.depVar.universiteId=this.mydata.universiteId;
    
    });
  }
  async ondepartementupdate() {
    this.dep.update(this.depVar);
  }
}
