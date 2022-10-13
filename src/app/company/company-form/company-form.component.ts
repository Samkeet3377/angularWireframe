import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { company } from '../model/company';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  companyList: company[];
  companyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.companyList = [];

    this.companyForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

}
