import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   user = {
     email: "",
     password: '',
   }

  constructor( private router:Router,
               private toaster: ToastController,
              public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  } 
  
  
  async navigateToLoginPage(){
    const user  = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
    console.log(user); 

    if (user.user.email){
      alert('login successfull')
      this.router.navigate(['home'])
      
    }else{
      alert('login fail')
      this.router.navigate(['main'])
    }
 }
 
  
}

