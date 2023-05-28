import { ClubService } from './../club.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent implements OnInit {

  mydata$: any;

  page: number = 1;
  search: string = "";


  constructor(private service: ClubService, private router: Router) { }

  ngOnInit() {
    this.mydata$ = this.service.getData(this.page);
  }


  edit(id: any) {
    this.router.navigate(['/club_update'], { queryParams: { id: id } });
  }

  confirmfunction(id: any) {
    alert("le club id : '" + id + "' a été supprimé avec success");
    window.location.reload();
  }

  incSearch(){
    this.page++;
    this.mydata$ = this.service.search(this.search ,this.page);
  } 
  
  decSearch(){
    this.page--;
    this.mydata$ = this.service.search(this.search ,this.page);
  }
  
  onSearchChange(searchValue: string) {
    this.search = searchValue ;
    this.mydata$ = this.service.search(searchValue ,1);
  }
}
