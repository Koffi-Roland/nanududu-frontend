import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  array = [1, 2, 3, 4];

  constructor() {

   }

  ngOnInit(): void {

  }

}
