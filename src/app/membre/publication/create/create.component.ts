import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      date: [null],
      expiration: [null],
      libelle: ['', [Validators.required]],
      description: ['', [Validators.required]],

     
    });
  }
  submitForm(): void {
    console.log(this.validateForm.value);
  }


 

}
