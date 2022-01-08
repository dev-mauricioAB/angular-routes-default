import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FirstComponent } from './first.component';

import { ChildAModule } from '../child-a/child-a.module';
import { ChildBModule } from './../child-b/child-b.module';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    ChildAModule,
    ChildBModule,
    RouterModule.forChild([
      {
        path: '',
        component: FirstComponent
      }
    ])
  ],
  exports: [
    FirstComponent
  ]
})

export class FirstModule { }
