import { Injectable } from '@angular/core';
import { Observable, of, from, Subject } from 'rxjs';
const axios = require('axios');

@Injectable({
  providedIn: 'root',
})
export class UseApiMunicipalyService {
  selectedMunicipaly!: string;
  constructor() {}

  obtenInfoMunicipaly() {
    return axios.post('https://www.php.engenius.com.co/DatabaseIE.php', {
      User: 'etraining',
      Password: 'explorandoando2020%',
      option: 'municipios',
    });
  }

  getinstitutions(dane: string) {
    return axios.post('https://www.php.engenius.com.co/DatabaseIE.php', {
      User: 'etraining',
      Password: 'explorandoando2020%',
      option: 'instituciones',
      CodMun: dane,
    });
  }
  getsedes(codInst: string) {
    return axios.post('https://www.php.engenius.com.co/DatabaseIE.php', {
      User: 'etraining',
      Password: 'explorandoando2020%',
      option: 'sedes',
      CodInst: codInst,
    });
  }

  getgroupsAsociate(codsede: string) {
    return axios.post('https://www.php.engenius.com.co/DatabaseIE.php', {
      User: 'etraining', 
      Password: 'explorandoando2020%', 
      option: 'grupos', 
      CodSede: codsede,
    });
  }

  getgroupsInfo(idGroup: string) {
    return axios.post('https://www.php.engenius.com.co/DatabaseIE.php', {
      User: 'etraining', 
      Password: 'explorandoando2020%', 
      option: 'infoGrupo', 
     IdGrupo: idGroup 
    });
  }

}
