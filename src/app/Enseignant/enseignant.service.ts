import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http: HttpClient) { }

  getData(page: number) {
    return this.http.get('http://localhost:3000/enseignants' + "&_page=" + page + "&_limit=3");
  }
  getmyData() {
    return this.http.get('http://localhost:3000/enseignants/');
  }

  getcours() {
    return this.http.get('http://localhost:3000/cours');
  }

  getbyid(x: String) {
    return this.http.get('http://localhost:3000/enseignants/' + x);
  }

  search(query: string, page: number) {
    return this.http.get("http://localhost:3000/enseignants?_expand=cours" + "&q=" + query + "&_page=" + page + "&_limit=3");
  }

}
