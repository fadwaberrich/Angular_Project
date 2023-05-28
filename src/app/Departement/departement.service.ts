import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from '../models/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  PATH_OF_API = 'http://localhost:8081/SpringMVC/departements';

  constructor(private http: HttpClient, private router: Router) { }

  add(departements: Departement) {
    this.http.post("http://localhost:3000/departements/", departements).subscribe((response) => {
      this.router.navigate(['list_dep']);
    });
  }

  getbyid(x: String) {
    return this.http.get("http://localhost:3000/departements/" + x);
  }

  getData() {
    return this.http.get('http://localhost:3000/departements?_expand=universite');
  }


  getuniversite() {
    return this.http.get('http://localhost:3000/universites/');
  }



  getOne(id: number) {
    return this.http.get<Departement[]>(this.PATH_OF_API + id);
  }

  delete(id: any) {
    this.http.delete('http://localhost:3000/departements/'+id).subscribe((response) => {
      window.location.reload();
      this.router.navigate(['list_dep']);    
    });
   
  }

  update(d : Departement){
    this.http.put('http://localhost:3000/departements/'+d.id, d).subscribe((response) => {
      this.router.navigate(['list_dep']);
    });
  }
  
}
