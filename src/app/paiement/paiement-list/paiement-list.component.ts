import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaiementService } from '../paiement.service';

@Component({
  selector: 'app-paiement-list',
  templateUrl: './paiement-list.component.html',
  styleUrls: ['./paiement-list.component.scss']
})
export class PaiementListComponent implements OnInit {

  mydata$: any;
  page : number = 1;
  search : string = "";

  constructor(private paiements: PaiementService, private router: Router) { }

  ngOnInit(): void {
    // this.mydata$ = this.paiements.getData();
    this.mydata$ =this.paiements.search(this.search , this.page);
  }

  confirmfunction(id:any)
  {
    alert("le paiement id : '"+id+"'a été supprimé avec success");
    window.location.reload();
  }

  edit(id: number) {
    this.router.navigate(['/update_paiement'], { queryParams: { id: id } });
  }

  incSearch(){
    this.page++;
    this.mydata$ = this.paiements.search(this.search ,this.page);
  } 
  
  decSearch(){
    this.page--;
      this.mydata$ = this.paiements.search(this.search ,this.page);
  }

  onSearchChange(searchValue: string) {
    this.search = searchValue ;
      this.mydata$ = this.paiements.search(searchValue ,1);
  }

}
