import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { Publication } from '../model/publication';
import { PublicationService } from '../service/publication.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  statusCode:any;
  allPublication:Publication[];
  allMyPublication:Publication[];

  constructor(private publicationService:PublicationService,private loginService :LoginService) { }

  ngOnInit(): void {
    this.getAllPublication();
    this.getAllPublicationByUser();
  }

  getAllPublication():Publication[]{
    this.publicationService.getAllPublication()
    .subscribe(
      data => this.allPublication = data,
      errorCode => this.statusCode = errorCode);
  return this.allPublication;
  }

  getAllPublicationByUser():Publication[]{
    this.publicationService.getAllPublicationByUser(this.loginService.getUser().data.telephone)
    .subscribe(
      data => this.allMyPublication = data,
      errorCode => this.statusCode = errorCode);
     return this.allMyPublication;
  }
 

}
