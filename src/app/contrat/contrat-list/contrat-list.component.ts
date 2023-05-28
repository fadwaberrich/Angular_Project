import { ContratService } from './../contrat.service';
import { Contrat } from './../contrat';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contrat-list',
  templateUrl: './contrat-list.component.html',
  styleUrls: ['./contrat-list.component.scss']
})
export class ContratListComponent implements OnInit {

  mydata$: any;
  page : number = 1;
  search : string = "";
  PATH_OF_API = 'http://localhost:3000/contrats/';


  constructor(private contratService: ContratService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.mydata$ = this.contratService.getData(this.page);
  }

  incSearch(){
    this.page++;
    this.mydata$ = this.contratService.search(this.search ,this.page);
  } 
  
  decSearch(){
    this.page--;
      this.mydata$ = this.contratService.search(this.search ,this.page);
  }

  onSearchChange(searchValue: string) {
    this.search = searchValue ;
      this.mydata$ = this.contratService.search(searchValue ,1);
  }

  confirmfunction(id:any)
  {
    alert("le contrat id : '"+id+"'a été supprimé avec success");
    window.location.reload();
  }

  edit(id: number) {
    this.router.navigate(['/update_contrat'], { queryParams: { id: id } });
  }

 
}
