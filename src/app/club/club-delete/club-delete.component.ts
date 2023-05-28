import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-club-delete',
  templateUrl: './club-delete.component.html',
  styleUrls: ['./club-delete.component.scss']
})
export class ClubDeleteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() id;
  @Output() confirmfunction:EventEmitter<any>=new EventEmitter()
  ngOnInit(): void {
  }

  delete(id: any) {
    this.http.delete("http://localhost:3000/clubs/" + id).subscribe((response) => {
      this.confirmfunction.emit(id);
      
    });
  }


}
