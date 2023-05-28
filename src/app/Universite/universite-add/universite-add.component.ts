import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'
import { Universite } from 'src/app/models/Universite';
import { FormBuilder } from '@angular/forms';
import { UniversiteService } from '../universite.service';

@Component({
  selector: 'app-universite-add',
  templateUrl: './universite-add.component.html',
  styleUrls: ['./universite-add.component.scss']
})
export class UniversiteAddComponent implements OnInit {
  universite : Universite = new Universite();

 


  constructor(private http: HttpClient,private router : Router ,  private fb: FormBuilder , private universites : UniversiteService ,
    private service: UniversiteService) { }

  ngOnInit(): void {
  
  }
 

  onProductCreate() {
    return this.service.add(this.universite);
  }

}

