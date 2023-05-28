import { Cours } from './../../models/cours';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.scss']
})
export class CoursListComponent implements OnInit {

  mydata$: any;
  PATH_OF_API = 'http://localhost:8081/SpringMVC/Cours';

  page: number = 1;
  search: string = "";


  constructor(private Cours: CoursService, private router: Router) {

  }

  ngOnInit(): void {
    this.mydata$ = this.Cours.search(this.search ,this.page);
  }


  incSearch() {
    this.page++;
    this.mydata$ = this.Cours.search(this.search, this.page);
  }

  decSearch() {
    this.page--;
    this.mydata$ = this.Cours.search(this.search, this.page);
  }

  onSearchChange(searchValue: string) {
    this.search = searchValue;
    this.mydata$ = this.Cours.search(searchValue, 1);
  }


  delete(id: any) {
    this.Cours.deleteCours(id);
  }


  public updateCours(cours: Cours) {
    this.Cours.updateCours(Cours);
  }


  edit(id: any) {
    this.router.navigate(['/cours_update'], { queryParams: { id: id } });
  }
}