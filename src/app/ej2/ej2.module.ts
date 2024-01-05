import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ej2PageRoutingModule } from './ej2-routing.module';

import { Ej2Page } from './ej2.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ej2PageRoutingModule,
    SharedModule
  ],
  declarations: [Ej2Page]
})
export class Ej2PageModule {}
