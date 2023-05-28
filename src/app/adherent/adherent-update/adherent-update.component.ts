import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Adherent } from 'src/app/models/Adherent';
import { AdherentService } from '../adherent.service';

@Component({
  selector: 'app-adherent-update',
  templateUrl: './adherent-update.component.html',
  styleUrls: ['./adherent-update.component.scss']
})
export class AdherentUpdateComponent implements OnInit {

  adVar : Adherent = new Adherent();
  mydata: any;
  mydata$:any;
  myetudiant$:any;
  myclub$:any;

  etudiantId!: string;
  clubId!: string;

  selectedClubId!: string;
  selectedEtudiantId!: string;

  constructor(private route: ActivatedRoute , private adherent :AdherentService ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.adVar.id = params['id'];

      this.myetudiant$ =this.adherent.getetudiant();
      this.myclub$ =this.adherent.getclub();
    });

    this.mydata = this.adherent.getbyid(this.adVar.id).pipe(tap((data) => {this.mydata = data;}));

    this.mydata.forEach(m => {
      this.adVar.etudiantId = this.mydata.myetudiant.etudiantId;
      this.adVar.clubId = this.mydata.myclub.clubId;
      
    });
  }
  async onadherentupdate(any :any) {
    this.adVar.clubId = this.selectedClubId;
    this.adVar.etudiantId  = this.selectedEtudiantId;
    this.adherent.update(this.adVar.id ,this.adVar);
  }
}
