import { UniversiteServiceService } from './../universite-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { UniversiteService } from '../universite.service';
import { Universite } from 'src/app/models/Universite';

@Component({
  selector: 'app-universite-update',
  templateUrl: './universite-update.component.html',
  styleUrls: ['./universite-update.component.scss']
})
export class UniversiteUpdateComponent implements OnInit {
  PATH_OF_API = 'http://localhost:3000/universites/';
  uni : Universite = new  Universite();

  mydata$: any;
  mydata: any;
  id: any;
  nom!: string;

  constructor(private route: ActivatedRoute, private universite: UniversiteService) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    this.mydata$ = this.universite.getbyid(this.id);
    this.mydata = this.universite.getbyid(this.id).pipe(tap((data) => (this.mydata = data)))

    this.mydata.forEach(m => {
      this.uni.nom = this.mydata.nom;
    });

  }


  ngOnInit() {
  }


  async update(universite : Universite) {
    universite.id = this.id;
    console.log(universite);
    this.universite.update(universite);
  }

}