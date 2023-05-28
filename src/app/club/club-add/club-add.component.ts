import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/models/club';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-club-add',
  templateUrl: './club-add.component.html',
  styleUrls: ['./club-add.component.scss']
})
export class ClubAddComponent implements OnInit {
  club : Club = new Club();

  constructor(private service: ClubService,private router: Router , ) { }

  ngOnInit() {
  }

  add(club: { nom: string, description: string, dateCreation: string }) {
    let date = new Date();
    club.dateCreation = date.toISOString();
    this.service.add(club);
    this.router.navigate(['club_list']);
  }

}
