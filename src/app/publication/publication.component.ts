import { Component, OnInit } from '@angular/core';
import { Publication } from '../membre/publication/model/publication';
import { PublicationService } from '../membre/publication/service/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  statusCode:any;
  allPublication:Publication[];
  constructor(private publicationService:PublicationService) { }

  ngOnInit(): void {
    this.getAllPublication();
  }

  getAllPublication():Publication[]{
    this.publicationService.getAllPublication()
    .subscribe(
      data => this.allPublication = data,
      errorCode => this.statusCode = errorCode);
  return this.allPublication;
  }

}
