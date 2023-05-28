import { AdherentService } from './../adherent.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adherent-list',
  templateUrl: './adherent-list.component.html',
  styleUrls: ['./adherent-list.component.scss']
})
export class AdherentListComponent implements OnInit {

  mydata$ : any ;

  constructor(private service :  AdherentService, private router: Router) { }

  ngOnInit() {
    this.mydata$=  this.service.getAll();
  }

  edit(id:any){
    this.router.navigate(['/update_adherent'], { queryParams: { id: id } });
  }

  delete(id :string){
    this.service.delete(id);
  }

}
