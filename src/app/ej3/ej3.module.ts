import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { C3Component } from '../c3/c3.component';

import { Ej3PageRoutingModule } from './ej3-routing.module';

import { Ej3Page } from './ej3.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ej3PageRoutingModule,
   SharedModule
  ],
  declarations: [Ej3Page,C3Component]
})
export class Ej3PageModule {}
