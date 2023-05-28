import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClubService {


  api: string = "http://localhost:3000/clubs";

  api1: string = "http://localhost:3000/clubs/";
  constructor(private http: HttpClient, private router: Router) { }

  getAll() {
    return this.http.get(this.api);
  }

  add(club: { nom: string, description: string , dateCreation: string }) {
    this.http.post(this.api, club).subscribe((response) => {
      console.log(response);
      this.router.navigate(['club_list']);
    });
  }

  edit() {

  }

  delete(id: number) {
    this.http.delete(this.api1 + id).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }

  getbyid(x: String){
    return this.http.get(this.api1 +x);
  }

  getOne(id :number){
    return this.http.get(this.api1 +  id);
  }


  getData(page : number){
    return this.http.get(this.api + "?_page=" + page + "&_limit=3");
  }
  search(query : string , page : number){
    return this.http.get(this.api +"/?q=" + query + "&_page=" + page + "&_limit=3");
  }

}
