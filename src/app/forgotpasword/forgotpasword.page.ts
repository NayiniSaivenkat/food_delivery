import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpasword',
  templateUrl: './forgotpasword.page.html',
  styleUrls: ['./forgotpasword.page.scss'],
})
export class ForgotpaswordPage implements OnInit {
  email: string;

  constructor(private afauth: AngularFireAuth,
              private toaster: ToastController,
              private router: Router,
              private loadingCntrl: LoadingController) { }

  ngOnInit() {
  }
async resetPassword(){
  if(this.email){
    const loading = await this.loadingCntrl.create({
      message: "reset password link....",
      spinner: "crescent",
      showBackdrop: true
    });
      loading.present();
      this.afauth.sendPasswordResetEmail(this.email)
      .then(()=> {
        loading.dismiss();
        this.toast('please check your email','success')
        this.router.navigate(["login"])
      })
      .catch((error)=> {
       this.toast(error.message,'danger');
      })
  }else{
        this.toast('please enter your email adress!','danger');
  }
}
 async toast(message, status){
   const toast = await this.toaster.create({
     message: message,
     position:'top',
     color:status,
     duration:2000
   });
   toast.present();
 }
}
