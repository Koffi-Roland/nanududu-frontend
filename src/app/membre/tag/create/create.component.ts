import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/shared/service/message.service';
import { Tag } from '../model/tag';
import { TagService } from '../service/tag.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  validateForm!: FormGroup;
  _msg:any;
  verifSuccessMsg=false;
  verifErrorMsg=false;

  tag: Tag = new Tag(null);
  constructor(private fb: FormBuilder,private tagService: TagService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
     
      libelle: [null, [Validators.required]],
      description: [null, [Validators.required]],

     
    });
  }
  submitForm(): void {

    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
    this.tag.libelle= this.validateForm.controls['libelle'].value;
    this.tag.description=this.validateForm.controls['description'].value;

    try {
      this.tagService.add(this.tag).subscribe(
        res => {
          this.validateForm.reset();
          this._msg="Ajout effectué avec success";
          this.verifSuccessMsg=true;
          //this.messageService.messageSuccess('Ajout effectué avec success');
          console.log(res);
        }, error => {
          this.verifErrorMsg=true;
          this._msg="Erreur d'execution de la requête. Veuillez verifier vos informations";
          console.error(error);
        }
      );
    } catch (error) {
      console.log("exception e = " + error);
    }

   
  }


 

 

}
