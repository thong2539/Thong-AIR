import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThongPage } from './thong';

@NgModule({
  declarations: [
    ThongPage,
  ],
  imports: [
    IonicPageModule.forChild(ThongPage),
  ],
})
export class ThongPageModule {}
