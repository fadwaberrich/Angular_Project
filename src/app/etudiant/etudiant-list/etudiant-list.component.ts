import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit {

  mydata$: any;

  constructor(private http: HttpClient ,private service: EtudiantService, private router: Router) {

  }

  ngOnInit(): void {

    this.mydata$ =this.service.getData();
    // this.mydata$=  this.etudiants.getData().pipe(tap((data)=>(this.mydata = data)))
    // data hedhi is only for show on html in case u want to use the fetched data here add .pipe/tap example 


  }
  edit(id: number) {
    this.router.navigate(['/update_etudiant'], { queryParams: { id: id } });
  }
  PATH_OF_API = 'http://localhost:3000/etudiants/'
  delete(id: number) {
    return this.http.delete(this.PATH_OF_API +id).subscribe((response)=>{
      window.location.reload();
      console.log(response);
    });
  }

}
