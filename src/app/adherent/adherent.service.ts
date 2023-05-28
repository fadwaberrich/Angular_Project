import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Adherent } from './../models/Adherent';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  api = "http://localhost:3000/adherents"

  constructor(private http: HttpClient, private router: Router) { }

  getAll() {
    return this.http.get(this.api+ "?_expand=etudiant&_expand=club");
  }
  getetudiant() {
    return this.http.get('http://localhost:3000/etudiants');
  }
  getclub() {
    return this.http.get('http://localhost:3000/clubs');
  }
  getOne(id :string) {
    return this.http.get(this.api + id);
  }
  

  add(adherent: Adherent) {
    this.http.post(this.api, adherent).subscribe((response) => {
      console.log(response);
      this.router.navigate(['liste_adherent']);
    });
  }

  update(id : any , adherent: Adherent) {
    this.http.put(this.api + id, adherent).subscribe((response) => {
      console.log(response);
      this.router.navigate(['liste_adherent']);
    });
  }
  getbyid(x: String) {
    return this.http.get("http://localhost:3000/adherents/" + x);
  }
  delete(id: string) {
    this.http.delete(this.api + id).subscribe((response) => {
      console.log(response);
      window.location.reload();
      this.router.navigate(['liste_adherent']);
    });
  }
}
