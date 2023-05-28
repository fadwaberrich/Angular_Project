import { HttpClient } from '@angular/common/http';
import { Contrat } from './contrat';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  PATH_OF_API = 'http://localhost:3000/contrats';

  
  constructor(private http:HttpClient ,  private router: Router) { }

  getbyid(x: string){
    return this.http.get('http://localhost:3000/contrats/'+x);
  }

  getData(page : number){
    return this.http.get(this.PATH_OF_API + "?_page=" + page + "&_limit=3");
  }

  getOne(id :number){
    return this.http.get(this.PATH_OF_API+ id);
  }
  add(contrat: Contrat) {
    this.http.post(this.PATH_OF_API + '/', contrat).subscribe((response) => {
      this.router.navigate(['list_contrat']);
    });
  }

  search(query : string , page : number){
    return this.http.get(this.PATH_OF_API +"/?q=" + query + "&_page=" + page + "&_limit=3");
  }
  
}
