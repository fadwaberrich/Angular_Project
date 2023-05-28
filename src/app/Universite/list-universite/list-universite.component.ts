import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from 'src/app/models/Universite';
import { UniversiteService } from '../universite.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.scss']
})
export class ListUniversiteComponent implements OnInit {
  PATH_OF_API = 'http://localhost:3000/universites/';
  mydata$: any;

  constructor(private universtieservice: UniversiteService, private router: Router, private http: HttpClient) { }
  ngOnInit(): void{
    this.mydata$ = this.universtieservice.getData();
    this.mydata$.forEach(elem => {
      console.log(elem);
    });

  }
  fetch() {

  }
 
  confirmfunction(id:any)
  {
    alert("l'universite id : '"+id+"'a été supprimé avec success");
    window.location.reload();
  }
  edit(id: number) {
    this.router.navigate(['/universite_update'], { queryParams: { id: id } });
  }


}
