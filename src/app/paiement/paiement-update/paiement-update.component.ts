import { Paiement } from '../../models/paiement';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { tap } from 'rxjs';
import { PaiementService } from '../paiement.service';

@Component({
  selector: 'app-paiement-update',
  templateUrl: './paiement-update.component.html',
  styleUrls: ['./paiement-update.component.scss']
})
export class PaiementUpdateComponent implements OnInit {


  paiementVar : Paiement = new Paiement();
  mydata: any;
  mydata$:any;
  myetudiant$:any;
  mycontrat$:any;
  constructor(private route: ActivatedRoute, private paiement: PaiementService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.paiementVar.id = params['id'];

      this.myetudiant$ =this.paiement.getetudiant();
      this.mycontrat$ =this.paiement.getcontrat();
    });
    
    //  this.mydata$=this.paiement.getbyid(this.paiementVar.id);
    this.mydata = this.paiement.getbyid(this.paiementVar.id).pipe(tap((data) => {this.mydata = data;
    
    }));
   
      this.mydata.forEach(m => {
     
      this.paiementVar.montant = this.mydata.montant;
      this.paiementVar.etudiantId = this.mydata.etudiantId;
      this.paiementVar.contratId = this.mydata.contratId;
      
    });
  }

  async onpaiementupdate() {
    this.paiement.update(this.paiementVar);
  }
}
