import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors, FormBuilder, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { User } from '../membre/user/model/user';
import { UserService } from '../membre/user/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  validateForm: FormGroup;
  nom:string;
  value:any;
  _roles=["ROLE_USER"];
  user: User = new User(null);
  constructor(private fb: FormBuilder,private userService:UserService) {

    this.validateForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      identifiant: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      gender: [null, [Validators.required]],
      agree: [false,[Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  submitForm(): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
   // this.nom=this.value
 // console.log() ;



    this.user.nom= this.validateForm.controls['nom'].value;
    this.user.identifiant=this.validateForm.controls['identifiant'].value;;
    this.user.prenom=this.validateForm.controls['prenom'].value;
    this.user.telephone=this.validateForm.controls['telephone'].value;
    this.user.motDePasse=this.validateForm.controls['password'].value;
    this.user.adresse=this.validateForm.controls['adresse'].value;

    this.user.roles=this._roles;
    this.user.aggree=this.validateForm.controls['agree'].value;

    console.log(JSON.stringify(this.user));
    try {
      this.userService.ajouter(this.user).subscribe(
        res => {
          this.validateForm.reset();
          console.log(res);
        }, error => {
          console.error(error);
        }
      );
    } catch (error) {
      console.log("exception e = " + error);
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

 
}
