import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { }
  PATH_OF_API = 'http://localhost:3000/cours/';

  getData() {
    return this.http.get(this.PATH_OF_API);
  }

    updateCours(Cours: any) {
    return this.http.put(this.PATH_OF_API, Cours);
  }

  deleteCours(id: any) {
    this.http.delete(this.PATH_OF_API + id).subscribe((response) => {
      window.location.reload();
    });
  }


  getbyid(x: String) {
    return this.http.get(this.PATH_OF_API + x);
  }

  getOne(id: number) {
    return this.http.get(this.PATH_OF_API + id);
  }

  search(query : string , page : number){
    return this.http.get(this.PATH_OF_API +"?q=" + query + "&_page=" + page + "&_limit=3");
  }
  

}
