import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ApiService } from 'src/app/share/service/api.service';
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
    private setData: SubjectDataService
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

  deleteCompanyList(id: number) {
    this.dataService.deleteCompanyData(id).subscribe((result) => {
      this.getCompanyList();
    });
  }

}


