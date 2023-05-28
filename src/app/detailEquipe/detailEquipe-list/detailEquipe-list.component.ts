import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DetailEquipeService } from '../detailEquipe.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailEquipe-list',
  templateUrl: './detailEquipe-list.component.html',
  styleUrls: ['./detailEquipe-list.component.scss']
})
export class DetailEquipeListComponent implements OnInit {

  constructor(private det: DetailEquipeService, private http: HttpClient,private router: Router) { }
  mydata$: any;
  PATH_OF_API = 'http://localhost:3000/detailEquipes/' ;
  ngOnInit() : void {
    this.mydata$ = this.det.getData();

  }
  delete(id: any) {
    return this.http.delete(this.PATH_OF_API  + id).subscribe((response) => {
      window.location.reload();
      console.log(response);
      this.router.navigate(['liste_detailEquipe']);
    });
  }

  edit(id: number) {
    this.router.navigate(['/update_detailEquipe'],{queryParams: {id: id}});
  }

}
