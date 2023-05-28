import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paiement-delete',
  templateUrl: './paiement-delete.component.html',
  styleUrls: ['./paiement-delete.component.scss']
})
export class PaiementDeleteComponent implements OnInit {



  constructor(private http: HttpClient) { }

  @Input() id;
  @Output() confirmfunction:EventEmitter<any>=new EventEmitter()
  ngOnInit(): void {
  }

  delete(id: any) {
    this.http.delete("http://localhost:3000/paiements/" + id).subscribe((response) => {
      this.confirmfunction.emit(id);
      
    });

}

}
