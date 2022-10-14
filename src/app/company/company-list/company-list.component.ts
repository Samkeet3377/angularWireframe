import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ApiService } from 'src/app/share/service/api.service';
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
    private dataService: ApiService
  ) {
    this.companyData = [];
    this.data = ''
  }

  ngOnInit(): void {
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


