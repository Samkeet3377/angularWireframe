import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/share/service/api.service';
import { company } from '../model/company';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  companyList: company[];
  companyForm: FormGroup;
  isSubmit: boolean;
  id: number;
  btnName: string;

  constructor(
    public formBuilder: FormBuilder,
    public dataService: ApiService,
    public actRoute: ActivatedRoute
  ) {
    this.companyList = [];
    this.isSubmit = false;
    this.id = 0
    this.btnName = 'Add'

    this.companyForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: ['', ]
    });

    this.actRoute.params.subscribe((result)=> {
      this.id = result['id'];
      if(this.id){
        this.dataById();
        this.btnName = 'Edit'
      }
    });
  }

  ngOnInit(): void {
  }

  formSubmit(){
    this.isSubmit = true;
    if(this.companyForm.valid){
      if(this.id) {
        this.updateCompanyData();
      }
      else{
        this.addCompanyData();
      }
      this.isSubmit = false;
    }
    this.onReset();
  }
  addCompanyData(){
    this.dataService.addCompanyData(this.companyForm.value).subscribe((result)=> {
    });
  }

  dataById() {
    this.dataService.fetchCompanyDataById(this.id).subscribe((result)=> {
      this.companyForm.patchValue(result);
    });
  }

  updateCompanyData() {
    this.dataService.updateCompanyData(this.companyForm.value, this.id).subscribe((result)=> {
    });
  }

  onReset(){
    this.companyForm.reset();
  }
}
