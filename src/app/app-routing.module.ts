import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { AgenciesListComponent } from './components/agencies-list/agencies-list.component';
import { AgencyCreateComponent } from './components/agency-create/agency-create.component';
import { AgencyDetailsComponent } from './components/agency-details/agency-details.component';
import { AgencyEditComponent } from './components/agency-edit/agency-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/agencies', pathMatch: 'full' },
      { path: 'agencies', component: AgenciesListComponent },
      { path: 'agencies/:id', component: AgencyDetailsComponent },
      { path: 'create-agency', component: AgencyCreateComponent },
      { path: 'edit-agency/:id', component: AgencyEditComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
