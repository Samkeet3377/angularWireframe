import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '', component: CompanyComponent,
    children: [
      { path: 'add', component: CompanyFormComponent },
      { path: 'edit/:id', component: CompanyFormComponent },
      { path: 'detail/:id', component: CompanyDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
