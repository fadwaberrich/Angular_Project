import { UniversiteServiceService } from './../../universite/universite-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartementService } from '../departement.service';
import { Departement } from 'src/app/models/departement';

@Component({
  selector: 'app-departement-add',
  templateUrl: './departement-add.component.html',
  styleUrls: ['./departement-add.component.scss']
})
export class DepartementAddComponent implements OnInit {

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private dep: DepartementService,private router: Router) {  }

  departement : Departement = new Departement();
  myuniversite$:any;
  ngOnInit(): void {
    this.myuniversite$ =this.dep.getuniversite();
  }

  ondepartementCreate(departement: {nom: String,universiteId: string}) {
   
     
     this.http.post("http://localhost:3000/departements/" ,departement).subscribe((response)=>{
      
     });
     this.router.navigate(['list_dep']);
  }


}

