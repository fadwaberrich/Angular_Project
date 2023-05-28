import { Equipe } from './../../models/Equipe';
import { EquipeService } from './../equipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe-add',
  templateUrl: './equipe-add.component.html',
  styleUrls: ['./equipe-add.component.scss']
})
export class EquipeAddComponent implements OnInit {
  myequipe$:any;
equipe : Equipe = new Equipe();
  constructor(private service : EquipeService) { }

  ngOnInit(): void {
    
  }

  add(form : Equipe){
    this.service.add(form);
  }

}
