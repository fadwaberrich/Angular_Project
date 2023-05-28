import { Equipe } from './../../models/Equipe';
import { tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EquipeService } from './../equipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe-update',
  templateUrl: './equipe-update.component.html',
  styleUrls: ['./equipe-update.component.scss']
})
export class EquipeUpdateComponent implements OnInit {
  e : Equipe = new Equipe();

  id!: string;
  mydata$: any;
  mydata: any;

  niveau!: string;
  nom!: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private service: EquipeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.mydata$ = this.service.getOne(this.id);
    this.mydata = this.service.getOne(this.id).pipe(tap((data) => (this.mydata = data)))

    this.mydata.forEach(m => {
      this.e.nom = this.mydata.nom;
      this.niveau = this.mydata.niveau;
      

    });
  }

  edit(equipe : Equipe) {
    equipe.id = this.id;
    return this.service.update(equipe);
  }

}
