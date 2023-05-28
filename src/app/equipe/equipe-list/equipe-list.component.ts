import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../equipe.service';


@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.scss']
})
export class EquipeListComponent implements OnInit {
  mydata$: any;


  page : number = 1;
search : string = "";


  constructor(private equipe : EquipeService , private router : Router) { }

  ngOnInit(): void { 
    this.mydata$=  this.equipe.getData(this.page);
  }

  edit(id:string ){
    this.router.navigate(['update_equipe'], { queryParams: { id: id } });
  }

  confirmfunction(id:any)
  {
    alert("l'équipe id : '"+id+"' a été supprimé avec success");
    window.location.reload();
  }

  incSearch(){
    this.page++;
    this.mydata$ = this.equipe.search(this.search ,this.page);
  } 
  
  decSearch(){
    this.page--;
    this.mydata$ = this.equipe.search(this.search ,this.page);
  }
  
  onSearchChange(searchValue: string) {
    this.search = searchValue ;
    this.mydata$ = this.equipe.search(searchValue ,1);
  }
}
