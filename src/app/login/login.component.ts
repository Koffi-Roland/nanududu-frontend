import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerRouteUrl: string = "/register";

  constructor(private fb: FormBuilder,private router: Router,private loginService:LoginService) { }

  validateForm!: FormGroup;
  errMsg=false;
  msg:string;



  ngOnInit(): void {
    this.validateForm = this.fb.group({
      identifiant: [null, [Validators.required]],
      motDePasse: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.loginService.login(this.validateForm.value.identifiant,this.validateForm.value.motDePasse) .pipe(first())
    .subscribe(

        data => {
            this.router.navigate(['/membre']);

            console.log("success login");
        },
        error => {
            console.error("error login");
            this.errMsg = true;
            this.msg = "Mot de passe ou login incorrect";
        });
  
  
  }
  resetForm(): void {
    this.validateForm.reset();
  }

 goToRegister(){
  this.router.navigate([this.registerRouteUrl]);
}

}
