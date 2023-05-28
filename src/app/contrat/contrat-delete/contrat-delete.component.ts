import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contrat-delete',
  templateUrl: './contrat-delete.component.html',
  styleUrls: ['./contrat-delete.component.scss']
})
export class ContratDeleteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() id;
  @Output() confirmfunction:EventEmitter<any>=new EventEmitter()
  ngOnInit(): void {
  }

  delete(id: any) {
    this.http.delete("http://localhost:3000/contrats/" + id).subscribe((response) => {
      this.confirmfunction.emit(id);
      
    });
  }


}
