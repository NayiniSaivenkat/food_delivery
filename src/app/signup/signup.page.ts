import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user = {
    email: '',
    password:'',

  }

  constructor(private router:Router,
              public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async signUPUser(){
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
  
  console.log(user);

  if (user.user.email){
    alert("registration successfull!")
    this.router.navigate(['login']);
  }else{
    alert("registration failed!")
  }
  }
}
