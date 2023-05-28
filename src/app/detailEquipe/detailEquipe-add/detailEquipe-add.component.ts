import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { DetailEquipeService } from '../detailEquipe.service';
import { DetailEquipe } from 'src/app/models/detailEquipe';

@Component({
  selector: 'app-detailEquipe-add',
  templateUrl: './detailEquipe-add.component.html',
  styleUrls: ['./detailEquipe-add.component.scss']
})
export class DetailEquipeAddComponent implements OnInit {

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private det: DetailEquipeService,private router: Router) {  }
  PATH_OF_API = 'http://localhost:3000/detailEquipes' ;
  detailEquipe : DetailEquipe = new DetailEquipe();
  myequipeId$:any;
  ngOnInit(): void {
    this.myequipeId$ =this.det.getequipe();
  }

  ondeDetailEquipeCreate(Departement: {thematique: String,equipeId: string,salle:string}) {
    console.log(Departement);
     this.http.post(this.PATH_OF_API ,Departement).subscribe((response)=>{
       console.log(response);
     });
     this.router.navigate(['liste_detailEquipe']);
  }
}
