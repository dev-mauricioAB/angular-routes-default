import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildAComponent } from './child-a.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ChildAComponent],
  declarations: [ChildAComponent]
})
export class ChildAModule { }
