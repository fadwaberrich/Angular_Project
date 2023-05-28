import { Router } from '@angular/router';
import { Paiement } from '../models/paiement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  PATH_OF_API = 'http://localhost:8081/SpringMVC/Paiement';

  constructor(private http: HttpClient, private router: Router) { }

  add(paiement: Paiement) {
    this.http.post("http://localhost:3000/paiements/", paiement).subscribe((response) => {
      this.router.navigate(['liste_paiement']);
    });
  }

  getbyid(x: String) {
    return this.http.get("http://localhost:3000/paiements/" + x);
  }

  getData() {
    return this.http.get('http://localhost:3000/paiements/');
  }

  search(query : string , page : number) {
    return this.http.get('http://localhost:3000/paiements?_expand=etudiant&_expand=contrat'+"&q=" + query + "&_page=" + page + "&_limit=3");
  }

  getDatabyName() {
    return this.http.get('http://localhost:3000/paiements?_expand=etudiant&_expand=contrat');
  }

  getcontrat() {
    return this.http.get('http://localhost:3000/contrats/');
  }

  getetudiant() {
    return this.http.get('http://localhost:3000/etudiants/');
  }



  getOne(id: number) {
    return this.http.get<Paiement[]>(this.PATH_OF_API + '/retrievePaiement/' + id);
  }

  delete(id: number) {
    this.http.delete('http://localhost:3000/paiements/'+id).subscribe((response) => {   
    });
    window.location.reload();
  }

  update(p : Paiement){
    this.http.put('http://localhost:3000/paiements/'+p.id, p).subscribe((response) => {
      this.router.navigate(['liste_paiement']);
    });
  }
}
