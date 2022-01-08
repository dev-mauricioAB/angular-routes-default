import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildBComponent } from './child-b.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ChildBComponent],
  declarations: [ChildBComponent]
})
export class ChildBModule { }
