import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { DetailEquipe } from '../models/detailEquipe';

@Injectable({
  providedIn: 'root'
})
export class DetailEquipeService {
  PATH_OF_API = 'http://localhost:8081/SpringMVC/detailEquipes';

  constructor(private http: HttpClient, private router: Router) { }

  add(DetailEquipes: DetailEquipe) {
    this.http.post("http://localhost:3000/detailEquipes/", DetailEquipes).subscribe((response) => {
      this.router.navigate(['liste_detailEquipe']);
    });
  }

  getbyid(x: String) {
    return this.http.get("http://localhost:3000/detailEquipes/" + x);
  }

  getData() {
    return this.http.get('http://localhost:3000/detailEquipes/');
  }


  getequipe() {
    return this.http.get('http://localhost:3000/equipes/');
  }



  getOne(id: number) {
    return this.http.get<DetailEquipe[]>(this.PATH_OF_API + id);
  }

  delete(id: any) {
    this.http.delete('http://localhost:3000/detailEquipes/'+id).subscribe((response) => {
      this.router.navigate(['liste_detailEquipe']);
     
    });
    window.location.reload();
  }

  update(d : DetailEquipe){
    this.http.put('http://localhost:3000/detailEquipes/'+d.id, d).subscribe((response) => {
      this.router.navigate(['liste_detailEquipe']);
    });
  }
  
}
