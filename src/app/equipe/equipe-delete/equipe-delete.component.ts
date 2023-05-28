import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-equipe-delete',
  templateUrl: './equipe-delete.component.html',
  styleUrls: ['./equipe-delete.component.scss']
})
export class EquipeDeleteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() id;
  @Output() confirmfunction:EventEmitter<any>=new EventEmitter()
  ngOnInit(): void {
  }

  delete(id: any) {
    this.http.delete("http://localhost:3000/equipes/" + id).subscribe((response) => {
      this.confirmfunction.emit(id);
      
    });
}
}
