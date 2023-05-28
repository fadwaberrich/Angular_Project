import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DetailEquipeService } from '../detailEquipe.service';
import { DetailEquipe } from 'src/app/models/detailEquipe';

@Component({
  selector: 'app-detailEquipe-update',
  templateUrl: './detailEquipe-update.component.html',
  styleUrls: ['./detailEquipe-update.component.scss']
})
export class DetailEquipeUpdateComponent implements OnInit {
  id: any;
  mydata$: any;
  mydata: any;
  salle :any;
  thematique :any;
  myequipe$:any;

  detVar : DetailEquipe = new DetailEquipe();
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private det: DetailEquipeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.detVar.id = params['id'];
      this.myequipe$ =this.det.getequipe();
    });
  
    this.mydata=  this.det.getbyid(this.detVar.id).pipe(tap((data)=>(this.mydata = data)))
    ////alert(this.mydata[0].montant);
    
    this.mydata.forEach(m => {  
      this.detVar.salle=this.mydata.salle;
      this.detVar.thematique=this.mydata.thematique;
      this.detVar.equipeId=this.mydata.equipeId;
    
    });
  }
  async ondetailEquipetupdate() {
    this.det.update(this.detVar);
  } 

}
