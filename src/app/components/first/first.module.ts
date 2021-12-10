import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FirstComponent } from './first.component';
import { ChildAComponent } from '../child-a/child-a.component';
import { ChildBComponent } from '../child-b/child-b.component';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FirstComponent
      },
      {
        path: 'child-a',
        component: ChildAComponent
      },
      {
        path: 'child-b',
        component: ChildBComponent
      },]
    )
  ],
  exports: [
    FirstComponent
  ]
})

export class FirstModule { }
