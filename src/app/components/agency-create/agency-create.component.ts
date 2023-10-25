import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosResponse } from 'axios';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Agency } from 'src/app/models/agency.model';
import { Currency } from 'src/app/models/currency.model';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-agency-create',
  templateUrl: './agency-create.component.html',
  styleUrls: ['./agency-create.component.scss']
})
export class AgencyCreateComponent {

  constructor(private agencyService: AgencyService,
    private modalService: BsModalService) {
  }
  
  newAgency: Agency = {
    id: 0,
    code: 0,
    description: '',
    address: '',
    identification: '',
    currency: '',
    creationDate: new Date()
  };

  currencies: Currency[] = [
    { id: 1, code: 'USD', name: 'Dollar' },
    { id: 2, code: 'EUR', name: 'Euro' },
    { id: 3, code: 'GBP', name: 'British Pound' },
    { id: 4, code: 'JPY', name: 'Japanese Yen' },
  ];
  
  saveAgency() {
    this.agencyService.create(this.newAgency).then((response: AxiosResponse) => {
      if (response.status) {
        console.log("se ha creaado con exito");
      }
    });;
  }
  minDate() {

  }

  closeCreateAgencyModal() {
    const modalRef = this.modalService.hide();
  }
}
