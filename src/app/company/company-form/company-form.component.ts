import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/share/service/api.service';
import { NotificationService } from 'src/app/share/service/notification.service';
import { SubjectDataService } from 'src/app/share/service/subject-data.service';
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

  selectedCars = [3];
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', },
    { id: 3, name: 'Select Tags', disabled: true },
    { id: 4, name: 'Audi' },
  ];


  constructor(
    public formBuilder: FormBuilder,
    public dataService: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public setData: SubjectDataService,
    public toast: NotificationService
  ) {
    this.companyList = [];
    this.isSubmit = false;
    this.id = 0
    this.btnName = 'Add'

    this.companyForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: [''],
      selectTags: ['']
    });

    this.actRoute.params.subscribe((result) => {
      this.id = result['id'];
      if (this.id) {
        this.dataById();
        this.btnName = 'Edit'
      }
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    this.isSubmit = true;
    if (this.companyForm.valid) {
      if (this.id) {
        this.updateCompanyData();
        this.toastInfo();
      }
      else {
        this.addCompanyData();
        this.toastSuccess();
      }
      this.isSubmit = false;
    }
    else {
      this.toastError();
    }
    this.onReset();
  }
  addCompanyData() {
    this.dataService.addCompanyData(this.companyForm.value).subscribe((result) => {
      this.setData.getCompany.next(result);
      this.router.navigate(['../company'], { relativeTo: this.actRoute.parent });
    });
  }

  dataById() {
    this.dataService.fetchCompanyDataById(this.id).subscribe((result) => {
      this.companyForm.patchValue(result);
    });
  }

  updateCompanyData() {
    this.dataService.updateCompanyData(this.companyForm.value, this.id).subscribe((result) => {
      this.setData.updateCompany.next(result);
      this.router.navigate(['../company'], { relativeTo: this.actRoute.parent })
    });
  }

  onReset() {
    this.companyForm.reset();
    this.isSubmit = false;
  }

  toastSuccess() {
    this.toast.showSuccess('Company Added Successfully', 'Message');
  }
  toastError() {
    this.toast.showError('Something Went Wrong', 'Message');
  }
  toastInfo(){
    this.toast.showInfo('Data Updated Successfully','Message')
  }

}
