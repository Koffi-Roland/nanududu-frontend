import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { UploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Publication } from '../model/publication';
import { PublicationService } from '../service/publication.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  validateForm!: FormGroup;
  loading = false;
  avatarUrl?: string;
  publication: Publication = new Publication(null);
  _msg:any;
  verifSuccessMsg=false;
  verifErrorMsg=false;
  constructor(private publicationService: PublicationService,private fb: FormBuilder,private msg: NzMessageService,private loginService :LoginService) { }

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
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    this.publication.libelle= this.validateForm.controls['libelle'].value;
    this.publication.description=this.validateForm.controls['description'].value;;
    this.publication.date=this.validateForm.controls['date'].value;
    this.publication.expiration=this.validateForm.controls['expiration'].value;
    this.publication.personne=this.loginService.getUser().data.telephone;

    console.log(this.loginService.getUser().data.telephone);
    console.log(JSON.stringify(this.publication));
    try {
      this.publicationService.add(this.publication).subscribe(
        res => {
          this.validateForm.reset();
          this._msg="Ajout effectué avec success";
          this.verifSuccessMsg=true;
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




  beforeUpload = (file: UploadFile, _fileList: UploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image doit être moins de  2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }

}
