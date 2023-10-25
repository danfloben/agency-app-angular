import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { FormsModule } from '@angular/forms';
import { AgenciesListComponent } from './components/agencies-list/agencies-list.component';
import { AgencyDetailsComponent } from './components/agency-details/agency-details.component';
import { AgencyCreateComponent } from './components/agency-create/agency-create.component';
import { AgencyEditComponent } from './components/agency-edit/agency-edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    AgenciesListComponent,
    AgencyDetailsComponent,
    AgencyCreateComponent,
    AgencyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
