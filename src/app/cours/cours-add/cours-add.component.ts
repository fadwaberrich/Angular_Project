import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';

@Component({
  selector: 'app-cours-add',
  templateUrl: './cours-add.component.html',
  styleUrls: ['./cours-add.component.scss']
})
export class CoursAddComponent implements OnInit {
  
  PATH_OF_API = 'http://localhost:3000/cours';
  
  constructor(private http: HttpClient, private router: Router) { }
  cours : Cours = new Cours();

  ngOnInit() {
  }
  
  onProductCreate(Cours: { nom: string, description: string, credit: Number, nbHeures: Number, annee: string }) {
    this.http.post(this.PATH_OF_API, Cours).subscribe((response) => {
      console.log(response);
      this.router.navigate(['liste_cours']);
    });
  }
}

enum Module {
  MB = 0,
  TE = 1,
  RESEAUX = 2,
  SPRING_BOOT = 3,
  ANGULAR = 4,
  CCCF = 5,
  CCCA = 6,
  WEB = 7
}