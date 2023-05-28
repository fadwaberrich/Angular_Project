import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Contrat } from '../contrat';
import { ContratService } from '../contrat.service';

@Component({
  selector: 'app-contrat-update',
  templateUrl: './contrat-update.component.html',
  styleUrls: ['./contrat-update.component.scss']
})
export class ContratUpdateComponent implements OnInit {
  c: Contrat = new Contrat();

  PATH_OF_API = 'http://localhost:3000/contrats/';


  idC: any;
  mydata$: any;
  mydata: any;
  archive: any;
  dateDebutContrat: any;
  dateFinContrat: any;
  montantContrat: any;
  specialite: any;
  id_etudiant: any;


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private contrat: ContratService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idC = params['id'];
    });


    this.mydata$ = this.contrat.getbyid(this.idC);
    this.mydata = this.contrat.getbyid(this.idC).pipe(tap((data) => (this.mydata = data)))

    this.mydata.forEach(m => {
      this.c.archive = this.mydata.archive;
      this.c.montantContrat = this.mydata.montantContrat;
      this.c.dateDebutContrat = this.mydata.dateDebutContrat;
      this.c.dateFinContrat = this.mydata.dateFinContrat;
      this.c.specialite = this.mydata.specialite;
    
    });

  }
  async oncontratupdate(contrat: { id: string, archive: string, dateDebutContrat: string, dateFinContrat: string, montantContrat: string, specialite: string }) {
    contrat.id = this.idC;
    console.log("hello");
    console.log(contrat);
    console.log("hello");

    this.http.put(this.PATH_OF_API + '/' + this.idC, contrat).subscribe((response) => {
      this.router.navigate(['list_contrat']);

    });

  }

}
