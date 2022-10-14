import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../share/service/api.service';
import { ShareModule } from '../share/share.module';
import {NgSelectModule} from '@ng-select/ng-select'
import { SubjectDataService } from '../share/service/subject-data.service';

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
    FormsModule,
    NgSelectModule
  ],
  providers: [
    ApiService,
    SubjectDataService
  ]
})
export class CompanyModule { }
