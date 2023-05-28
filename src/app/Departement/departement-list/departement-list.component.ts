import { Universite } from './../../models/Universite';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../departement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.scss']
})
export class DepartementListComponent implements OnInit {

  constructor(private departements: DepartementService, private http: HttpClient,private router: Router) { }
  mydata$: any;
  PATH_OF_API = 'http://localhost:3000/departements' ;
  ngOnInit(): void {
    this.mydata$ = this.departements.getData();
  }
  delete(id: any) {
    this.departements.delete(id);
  }

  edit(id: number) {
    this.router.navigate(['/update_dep'],{queryParams: {id: id}});
  }



}
