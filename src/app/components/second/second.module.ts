import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SecondComponent } from './second.component';

@NgModule({
  declarations: [
    SecondComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SecondComponent
      },
    ]
    )
  ],
  exports: [
    SecondComponent
  ]
})

export class SecondModule { }
