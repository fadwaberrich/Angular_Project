import { Adherent } from './../../models/Adherent';
import { ClubService } from './../../club/club.service';
import { EtudiantService } from './../../etudiant/etudiant.service';
import { AdherentService } from './../adherent.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adherent-add',
  templateUrl: './adherent-add.component.html',
  styleUrls: ['./adherent-add.component.scss']
})
export class AdherentAddComponent implements OnInit {

  dataEtudiant$ : any;
  dataClub$ : any;

  constructor(private adrF: FormBuilder,private adherent : AdherentService , private serviceEtudiant : EtudiantService , private clubService : ClubService) { }

  ngOnInit() {

    this.dataEtudiant$ =this.adherent.getetudiant();
    this.dataClub$ =this.adherent.getclub();

  }
  
  add(ad : Adherent){
    console.log(ad);
    
    this.adherent.add(ad);
  }
}
