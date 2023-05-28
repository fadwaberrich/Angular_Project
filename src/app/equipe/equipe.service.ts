import { Equipe } from './../models/Equipe';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {


  api = "http://localhost:3000/equipes/"

  constructor(private http: HttpClient, private router: Router) { }



  getOne(id: any) {
    return this.http.get(this.api + id);
  }

  delete(id: string) {
    this.http.delete(this.api + id).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }

  update(equipe: Equipe) {

    this.http.put(this.api + equipe.id, equipe).subscribe((response) => {
      console.log(response);
      this.router.navigate(['liste_equipe']);
    });
  }

  add(equipe: Equipe) {
    this.http.post(this.api, equipe).subscribe((response) => {
      console.log(response);
      this.router.navigate(['liste_equipe']);
    });
  }

  getData(page : number){
    return this.http.get(this.api + "?_page=" + page + "&_limit=3");
  }
  search(query : string , page : number){
    return this.http.get(this.api +"?q=" + query + "&_page=" + page + "&_limit=3");
  }
}
