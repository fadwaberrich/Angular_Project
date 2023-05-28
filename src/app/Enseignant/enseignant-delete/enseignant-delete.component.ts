import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enseignant-delete',
  templateUrl: './enseignant-delete.component.html',
  styleUrls: ['./enseignant-delete.component.scss']
})
export class EnseignantDeleteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() id;
  @Output() confirmfunction:EventEmitter<any>=new EventEmitter()
  ngOnInit(): void {
  }

  delete(id: any) {
    this.http.delete("http://localhost:3000/enseignants/" + id).subscribe((response) => {
      this.confirmfunction.emit(id);
      
    });
  }


}
