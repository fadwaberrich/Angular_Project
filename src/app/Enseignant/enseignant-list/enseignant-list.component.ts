import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../enseignant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enseignant-list',
  templateUrl: './enseignant-list.component.html',
  styleUrls: ['./enseignant-list.component.scss']
})
export class EnseignantListComponent implements OnInit {

  constructor(private http: HttpClient , private enseignant : EnseignantService,private router: Router) { }
  mydata$: any;
  PATH_OF_API = 'http://localhost:3000/enseignants/' ;

  page : number = 1;
search : string = "";


  ngOnInit() : void { 
    this.mydata$=  this.enseignant.getmyData();
  }
  confirmfunction(id:any)
  {
    alert("l'enseignant id : '"+id+"' a été supprimé avec success");
    window.location.reload();
  }

  edit(id: number) {
    this.router.navigate(['/update_enseignant'],{queryParams: {id: id}});
  }


  incSearch(){
    this.page++;
    this.mydata$ = this.enseignant.search(this.search ,this.page);
  } 
  
  decSearch(){
    this.page--;
    this.mydata$ = this.enseignant.search(this.search ,this.page);
  }
  
  onSearchChange(searchValue: string) {
    this.search = searchValue ;
    this.mydata$ = this.enseignant.search(searchValue ,1);
  }

}
