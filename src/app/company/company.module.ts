import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../share/service/api.service';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyFormComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShareModule,
    FormsModule
  ],
  providers: [
    ApiService
  ]
})
export class CompanyModule { }
