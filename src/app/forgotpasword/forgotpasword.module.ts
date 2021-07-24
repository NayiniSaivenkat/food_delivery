import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpaswordPageRoutingModule } from './forgotpasword-routing.module';

import { ForgotpaswordPage } from './forgotpasword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpaswordPageRoutingModule
  ],
  declarations: [ForgotpaswordPage]
})
export class ForgotpaswordPageModule {}
