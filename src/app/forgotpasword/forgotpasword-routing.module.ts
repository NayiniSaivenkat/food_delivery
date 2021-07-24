import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpaswordPage } from './forgotpasword.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpaswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpaswordPageRoutingModule {}
