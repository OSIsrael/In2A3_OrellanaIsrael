import { NgModule } from '@angular/core';

import { C2Component } from './c2/c2.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports:[
    IonicModule,
    FormsModule
  ],
  declarations: [C2Component],
  exports: [
    C2Component,
  ],
})
export class SharedModule { }
