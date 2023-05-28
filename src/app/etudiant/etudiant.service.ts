import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EtudiantService {

  api = "http://localhost:8081/SpringMVC/Etudiant";

  constructor(private http: HttpClient , private router : Router) { }



  getData() {
    return this.http.get('http://localhost:3000/etudiants/');
  }


  getDatabyName() {
    return this.http.get('http://localhost:3000/etudiants?_expand=departement&_expand=equipe');
  }


  add(etudiant) {
    this.http.post('http://localhost:3000/etudiants/', etudiant).subscribe((response) => {
    
      this.router.navigate(['liste_etudiant']);
      
    });

  }

  getbyid(x: String){
    return this.http.get('http://localhost:3000/etudiants/'+x);
  }

  getdepartement() {
    return this.http.get('http://localhost:3000/departements/');
  }

  getequipe() {
    return this.http.get('http://localhost:3000/equipes/');
  }






}
