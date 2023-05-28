import { PaiementService } from './../paiement.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Paiement } from '../../models/paiement';

@Component({
  selector: 'app-paiement-add',
  templateUrl: './paiement-add.component.html',
  styleUrls: ['./paiement-add.component.scss']
})
export class PaiementAddComponent implements OnInit {

  paiement : Paiement = new Paiement();
  myetudiant$:any;
  mycontrat$:any;
  constructor(private service: PaiementService,private fb: FormBuilder,private paiements: PaiementService) { }
  montantpatern="[0-9]{1,15}";

  paiementForm = this.fb.group({
    montant: ['',Validators.required],
    etudiantId:['',Validators.required],
    contratId:['',Validators.required]

  });


  ngOnInit(): void {

    this.myetudiant$ =this.paiements.getetudiant();
    this.mycontrat$ =this.paiements.getcontrat();

  }

  onpaiementcreate() {
    //alert(this.paiementForm.value.montant);
    this.paiements.add(this.paiementForm.value);
    
  }
}
