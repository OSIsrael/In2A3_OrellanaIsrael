import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ej2Page } from './ej2.page';

const routes: Routes = [
  {
    path: '',
    component: Ej2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ej2PageRoutingModule {}
