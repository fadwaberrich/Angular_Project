import { AdherentUpdateComponent } from './adherent/adherent-update/adherent-update.component';
import { AdherentAddComponent } from './adherent/adherent-add/adherent-add.component';
import { AdherentListComponent } from './adherent/adherent-list/adherent-list.component';
import { EquipeUpdateComponent } from './equipe/equipe-update/equipe-update.component';
import { DetailEquipeAddComponent } from './detailEquipe/detailEquipe-add/detailEquipe-add.component';
import { DetailEquipeListComponent } from './detailEquipe/detailEquipe-list/detailEquipe-list.component';
import { ClubUpdateComponent } from './club/club-update/club-update.component';
import { ClubAddComponent } from './club/club-add/club-add.component';
import { ClubListComponent } from './club/club-list/club-list.component';
import { UniversiteUpdateComponent } from './universite/universite-update/universite-update.component';
import { UniversiteAddComponent } from './universite/universite-add/universite-add.component';
import { CoursUpdateComponent } from './cours/cours-update/cours-update.component';
import { PaiementUpdateComponent } from './paiement/paiement-update/paiement-update.component';
import { ContratListComponent } from './contrat/contrat-list/contrat-list.component';
import { ContratAddComponent } from './contrat/contrat-add/contrat-add.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListeComponent } from './liste/liste.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantAddComponent } from './etudiant/etudiant-add/etudiant-add.component';
import { EquipeAddComponent } from './equipe/equipe-add/equipe-add.component';
import { EquipeListComponent } from './equipe/equipe-list/equipe-list.component';
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { DepartementAddComponent } from './Departement/departement-add/departement-add.component';
import { DepartementListComponent } from './Departement/departement-list/departement-list.component';
import { EnseignantAddComponent } from './Enseignant/enseignant-add/enseignant-add.component';
import { EnseignantListComponent } from './Enseignant/enseignant-list/enseignant-list.component';
import { CoursAddComponent } from './cours/cours-add/cours-add.component';
import { CoursListComponent } from './cours/cours-list/cours-list.component';
import { PaiementListComponent } from './paiement/paiement-list/paiement-list.component';
import { PaiementAddComponent } from './paiement/paiement-add/paiement-add.component';
import { EnseignantUpdateComponent } from './Enseignant/enseignant-update/enseignant-update.component';

import { ContratUpdateComponent } from './contrat/contrat-update/contrat-update.component';
import { CommonModule } from '@angular/common';
import { ListUniversiteComponent } from './universite/list-universite/list-universite.component';
import { DepartementUpdateComponent } from './Departement/departement-update/departement-update.component';
import { UniversiteDeleteComponent } from './universite/universite-delete/universite-delete.component';
import { EtudiantUpdateComponent } from './etudiant/etudiant-update/etudiant-update.component';
import { DetailEquipeUpdateComponent } from './detailEquipe/detailEquipe-update/detailEquipe-update.component';
import { PaiementDeleteComponent } from './paiement/paiement-delete/paiement-delete.component';
import { EquipeDeleteComponent } from './equipe/equipe-delete/equipe-delete.component';
import { ContratDeleteComponent } from './contrat/contrat-delete/contrat-delete.component';
import { EnseignantDeleteComponent } from './Enseignant/enseignant-delete/enseignant-delete.component';
import { ClubDeleteComponent } from './club/club-delete/club-delete.component';


const appRoute: Routes = [
    {path:'home', component:HomeComponent},
    {path:'form', component:FormComponent},
    {path:'liste', component:ListeComponent},
    {path:'liste_etudiant', component:EtudiantListComponent},
    {path:'ajout_etudiant', component:EtudiantAddComponent},
    {path:'update_etudiant', component:EtudiantUpdateComponent},
    {path:'liste_equipe', component:EquipeListComponent},
    {path:'ajout_equipe', component:EquipeAddComponent},
    {path:'update_equipe', component:EquipeUpdateComponent},
    {path:'list_dep', component:DepartementListComponent},
    {path:'ajout_dep', component:DepartementAddComponent},
    {path:'update_dep', component:DepartementUpdateComponent},
    {path:'ajout_enseignant', component:EnseignantAddComponent},
    {path:'liste_enseignant', component:EnseignantListComponent},
    {path:'update_enseignant', component:EnseignantUpdateComponent},
    {path:'ajout_cours', component:CoursAddComponent},
    {path:'liste_cours', component:CoursListComponent},
    {path:'liste_paiement', component:PaiementListComponent},
    {path:'Ajout_paiement', component:PaiementAddComponent},
    {path:'update_paiement', component:PaiementUpdateComponent},
    {path:'ajout_contrat', component:ContratAddComponent},
    {path:'list_contrat', component:ContratListComponent},
    {path:'cours_update', component:CoursUpdateComponent},
    {path:'universite_list', component:ListUniversiteComponent},
    {path:'universite_add', component:UniversiteAddComponent},
    {path:'universite_update', component:UniversiteUpdateComponent},
    {path:'club_list', component:ClubListComponent},
    {path:'club_add', component:ClubAddComponent},
    {path:'club_update', component:ClubUpdateComponent},
    {path:'liste_detailEquipe', component:DetailEquipeListComponent},
    {path:'ajout_detailEquipe', component:DetailEquipeAddComponent},
    {path:'update_detailEquipe', component:DetailEquipeUpdateComponent},
    {path:'update_contrat', component:ContratUpdateComponent},
    {path:'liste_adherent', component:AdherentListComponent},
    {path:'ajout_adherent', component:AdherentAddComponent},
    {path:'update_adherent', component:AdherentUpdateComponent},


      {path:'', component:HomeComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FormComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    ListeComponent,
    EtudiantAddComponent,
    EtudiantListComponent,
    EtudiantUpdateComponent,
    EquipeAddComponent,
    EquipeListComponent,
    DepartementAddComponent,
    DepartementListComponent,
    DepartementUpdateComponent,
    EnseignantAddComponent,
    EnseignantListComponent,
    CoursAddComponent,
    CoursListComponent,
    PaiementListComponent,
    PaiementAddComponent,
    ContratListComponent,
    ContratAddComponent,
    PaiementUpdateComponent,
    CoursUpdateComponent,
    UniversiteAddComponent,
    UniversiteUpdateComponent,
    EnseignantUpdateComponent,
    ClubAddComponent,
    ClubListComponent,
    ClubUpdateComponent,
    ContratUpdateComponent,
    ListUniversiteComponent,
    EquipeUpdateComponent,
    AdherentListComponent,
    AdherentAddComponent,
    AdherentUpdateComponent,
    DetailEquipeAddComponent,
    DetailEquipeListComponent,
    DetailEquipeUpdateComponent,
    UniversiteDeleteComponent,
    PaiementDeleteComponent,
    EquipeDeleteComponent,
    ContratDeleteComponent,
    EnseignantDeleteComponent,
    ClubDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
