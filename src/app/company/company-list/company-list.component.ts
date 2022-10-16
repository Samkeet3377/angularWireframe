import { Component, OnInit } from '@angular/core';
// import { NgModel } from '@angular/forms';
import { ApiService } from 'src/app/share/service/api.service';
import { NotificationService } from 'src/app/share/service/notification.service';
import { SubjectDataService } from 'src/app/share/service/subject-data.service';
import { company } from '../model/company';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companyData: company[];
  data: string;

  constructor(
    private dataService: ApiService,
    private setData: SubjectDataService,
    public toast: NotificationService
  ) {
    this.companyData = [];
    this.data = ''
  }

  ngOnInit(): void {
    this.setData.getCompany.subscribe((result) => {
      this.companyData.push(result);
    });
    this.setData.updateCompany.subscribe((result) => {
      if (result) {
        const index = this.companyData.findIndex((data: company) => {
          data.id === result.id;
        });
        this.companyData.splice(index, 1, result);
      }
    });
    this.getCompanyList();
  }

  getCompanyList() {
    this.dataService.getCompanyData().subscribe((result) => {
      this.companyData = result;
    });
  }

  deleteCompanyList(data: company) {
    this.dataService.deleteCompanyData(data.id).subscribe((result) => {
      confirm('Are you sure to delete ' + data.name + ' !?');
      this.getCompanyList();
      this.toastWarning();
    });
  }

  toastWarning(){
    this.toast.showWarning('Data Deleted','Message');
  }

  getColor() {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
  }

}


