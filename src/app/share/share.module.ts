import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetIntialPipe } from './initialPipe/get-intial.pipe';
import { GetFilterPipe } from './filterPipe/get-filter.pipe';



@NgModule({
  declarations: [
    GetIntialPipe,
    GetFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetIntialPipe,
    GetFilterPipe
  ]
})
export class ShareModule { }
