import { Component } from '@angular/core';
import { AxiosResponse } from 'axios';
import { AgencyService } from 'src/app/services/agency.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AgencyCreateComponent } from '../agency-create/agency-create.component';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss']
})
export class AgenciesListComponent {

  agencies: any;

  constructor(private agencyService: AgencyService,
    private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.agencyService.getAll().then((response: AxiosResponse) => {
      if (response.status) {
        this.agencies = response.data;
      }
    });
  }

  openCreateAgencyModal() {
    const modalRef = this.modalService.show(AgencyCreateComponent, {
    });
  }

  deleteAgency(arg0: any) {
    throw new Error('Method not implemented.');
  }
}
