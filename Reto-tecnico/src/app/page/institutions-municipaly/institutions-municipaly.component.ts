import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { UseApiMunicipalyService } from '../../use-api-municipaly.service';

@Component({
  selector: 'app-institutions-municipaly',
  templateUrl: './institutions-municipaly.component.html',
  styleUrls: ['./institutions-municipaly.component.css'],
})
export class InstitutionsMunicipalyComponent implements OnInit {
  answerMunicipaly!: any;
  answerInstitutions: any;
  selectMunicipaly: any = '';
  viewSelection: string = '';
  selectInstitution: any = '';
  viewSelectionInstitutions: string = '';
  answersedes: any;
  viewSelectionsede: string = '';
  selectsede: string = '';
  selectgroup: string = '';
  answergroup: any;
  viewSelectiongroup: string = '';
  answergroupInfo: any;

  constructor(public apiService: UseApiMunicipalyService) {
    this.apiService
      .obtenInfoMunicipaly()
      .then((res: any) => {
        this.answerMunicipaly = res.data.data;
      })
      .catch((error: any) => {
        console.log('te equivocaste o algo paso', error);
      });
  }

  getMunicipaly() {
    this.viewSelection = this.selectMunicipaly;
    this.answergroup = this.answersedes = [];
    this.apiService
      .getinstitutions(this.viewSelection)
      .then((res: any) => {
        this.answerInstitutions = res.data.data;
        console.log('resultado de instituciones', this.answerInstitutions);
      })
      .catch((error: any) => {
        console.log('te equivocaste otravez', error);
      });
  }

  getInstitutions() {
    this.viewSelectionInstitutions = this.selectInstitution;
    this.answergroup = [];
    this.apiService
      .getsedes(this.viewSelectionInstitutions)
      .then((ress: any) => {
        this.answersedes = ress.data.data;
        console.log('a', this.answersedes);
      })
      .catch((error: any) => {
        console.log('te equivocaste otravez', error);
      });
  }

  getsedes() {
    this.viewSelectionsede = this.selectsede;
    this.apiService
      .getgroupsAsociate(this.viewSelectionsede)
      .then((ress: any) => {
        this.answergroup = ress.data.data;
        console.log('resultado de grupos', this.answergroup);
      })
      .catch((error: any) => {
        console.log('te equivocaste otravez', error);
      });
  }


  ngOnInit(): void {}
}
