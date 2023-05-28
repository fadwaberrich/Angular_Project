import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Universite } from '../models/Universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  PATH_OF_API = 'http://localhost:3000/universites/';

  constructor(private http: HttpClient, private router: Router) { }

  getbyid(x: string) {
    return this.http.get('http://localhost:3000/universites/' + x);
  }

  getData() {
    return this.http.get(this.PATH_OF_API);
  }

  getOne(id: number) {
    return this.http.get(this.PATH_OF_API + id);
  }

  add(universite: Universite) {
    this.http.post(this.PATH_OF_API, universite).subscribe((response) => {
      this.router.navigate(['universite_list']);
    });
  }
  update(universite: Universite) {
    this.http.put(this.PATH_OF_API + universite.id, universite).subscribe((response) => {
      console.log(response);
      this.router.navigate(['universite_list']);
    });
  }


}
