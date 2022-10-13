import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '', component: CompanyComponent,
    children: [
      { path: 'add', component: CompanyFormComponent },
      { path: 'edit/:id', component: CompanyFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
