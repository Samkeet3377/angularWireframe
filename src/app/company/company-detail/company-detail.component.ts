import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/share/service/api.service';
import { company } from '../model/company';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  companyList: any;
  id: number;

  constructor(
    public dataService: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
    this.companyList = [];
    this.id = 0
    this.actRoute.params.subscribe((result) => {
      this.id = result['id'];
      if (this.id) {
        this.dataById();
      }
    });
  }

  ngOnInit(): void {
  }

  dataById() {
    this.dataService.fetchCompanyDataById(this.id).subscribe((result: company) => {
      this.companyList = result;
    });
  }
  back() {
    this.router.navigate(['../company'], { relativeTo: this.actRoute.parent })
  }

}
