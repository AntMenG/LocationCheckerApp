import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PiPage } from './pi';

@NgModule({
  declarations: [
    PiPage,
  ],
  imports: [
    IonicPageModule.forChild(PiPage),
  ],
})
export class PiPageModule {}
