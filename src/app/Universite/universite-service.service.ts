import { Universite } from './../models/Universite';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversiteServiceService {

  api = "http://localhost:8081/SpringMVC/Universite";

  constructor(private http: HttpClient, private router: Router) { }

  getData() {
    return this.http.get(this.api + "/findall");
  }

  add(univ: { nomUniv: string }) {
    this.http.post('http://localhost:8081/SpringMVC/Universite/addUniversite', univ).subscribe((response) => {
      console.log(univ.nomUniv);
      console.log(response);
      this.router.navigate(['universite_list']);
    });
  }

  update(univ: {nomUniv: string }) {
    this.http.post('http://localhost:8081/SpringMVC/Universite/modifyUniversite', univ).subscribe((response) => {
      console.log(response);
      this.router.navigate(['universite_list']);
    });
  }

  delete(id: number) {
    this.http.delete(this.api + '/removeUniversite/' + id).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }
  async onpaiementupdate(paiement: { idP: string, mnt: string, idC: string, idE: string }) {
  
    
    this.http.put('http://localhost:8081/SpringMVC/Universite/modifyPaiement', paiement).subscribe((response) => {
      //alert("done");
    });

    this.router.navigate(['liste_paiement']);

}
}
