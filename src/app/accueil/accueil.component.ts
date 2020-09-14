import { Component, OnInit } from '@angular/core';
import { Publication } from '../membre/publication/model/publication';
import { PublicationService } from '../membre/publication/service/publication.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  array = [1, 2, 3, 4];
  lastPublication:Publication[];
  statusCode: any;
  constructor(private publicationService:PublicationService) {

   }

  ngOnInit(): void {
    this.getLastPublication();

  }


  getLastPublication():Publication[]{
    this.publicationService.getLastPublication()
    .subscribe(
      data => this.lastPublication = data,
      errorCode => this.statusCode = errorCode);
  return this.lastPublication;
  }

}
