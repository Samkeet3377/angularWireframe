import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { company } from 'src/app/company/model/company';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class SubjectDataService {

  public getCompany: Subject<company>;
  public updateCompany: Subject<company>;

  constructor() {
    this.getCompany = new Subject();
    this.updateCompany = new Subject;
  }
}
