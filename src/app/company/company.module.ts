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
import { NgSelectModule } from '@ng-select/ng-select'
import { SubjectDataService } from '../share/service/subject-data.service';
// import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from '../share/service/notification.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    NgSelectModule,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot()
  ],
  providers: [
    ApiService,
    SubjectDataService,
    NotificationService
  ]
})
export class CompanyModule { }
