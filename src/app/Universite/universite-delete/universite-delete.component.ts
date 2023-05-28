import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-universite-delete',
  templateUrl: './universite-delete.component.html',
  styleUrls: ['./universite-delete.component.scss']
})
export class UniversiteDeleteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() id;
  @Output() confirmfunction:EventEmitter<any>=new EventEmitter()
  ngOnInit(): void {
  }

  delete(id: any) {
    this.http.delete("http://localhost:3000/universites/" + id).subscribe((response) => {
      this.confirmfunction.emit(id);
      
    });
  }


}
