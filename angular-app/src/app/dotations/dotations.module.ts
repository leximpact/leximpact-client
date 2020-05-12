import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotationsComponent } from './dotations/dotations.component';



@NgModule({
  declarations: [
    DotationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DotationsComponent
  ]
})
export class DotationsModule { }
