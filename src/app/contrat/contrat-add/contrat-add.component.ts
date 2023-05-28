import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contrat } from '../contrat';
import { ContratService } from '../contrat.service';

@Component({
  selector: 'app-contrat-add',
  templateUrl: './contrat-add.component.html',
  styleUrls: ['./contrat-add.component.scss']
})
export class ContratAddComponent implements OnInit {
  contrat : Contrat = new Contrat();

  constructor(private service: ContratService , private fb: FormBuilder , private contrats : ContratService) { }
  montantpatern="[0-9]{1,15}";
  contratForm = this.fb.group({
    montant: ['',Validators.pattern(this.montantpatern)],
    contactId:['']
    });



  ngOnInit() {
  }

  onProductCreate() {
    

    return this.service.add(this.contrat);
  }
}
