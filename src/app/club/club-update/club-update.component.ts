import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Club } from 'src/app/models/club';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-club-update',
  templateUrl: './club-update.component.html',
  styleUrls: ['./club-update.component.scss']
})
export class ClubUpdateComponent implements OnInit {
c : Club = new Club();

  idClub: any;
  mydata$: any;
  clubVar : Club = new Club();
  mydata: any;
  nom:any;
  description:any;
  dateCreation:any;


  constructor(private http: HttpClient , private route: ActivatedRoute, private router: Router,private club:ClubService ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.clubVar.id = params['id'];
    });
    this.mydata$=  this.club.getbyid(this.clubVar.id);
    this.mydata=  this.club.getbyid(this.clubVar.id).pipe(tap((data)=>(this.mydata = data)))
    ////alert(this.mydata[0].montant);
    
    this.mydata.forEach(m => {  
      this.clubVar.nom=this.mydata.nom;
      this.clubVar.description=this.mydata.description;
      this.clubVar.dateCreation=this.mydata.dateCreation;
    });
      //this.montant=1400;
 
    //alert(this.montant);
  }
  async onclubupdate(club: { id: any, nom: string, description: string, dateCreation: string }) {
    
    this.http.put('http://localhost:3000/clubs/'+this.clubVar.id, club).subscribe((response) => {
      //alert("done");
      this.router.navigate(['club_list']);
    });

    this.router.navigate(['club_liste']);
    //alert(club.mnt);

  }


}
