import { Component, OnInit } from '@angular/core';
import { Tag } from '../model/tag';
import { TagService } from '../service/tag.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  statusCode:any;
  allTag:Tag[];
  constructor(private tagService:TagService) { }
  ngOnInit(): void {
    this.getAllTag();
  }

  getAllTag():Tag[]{
    this.tagService.getAllTag()
    .subscribe(
      data => this.allTag = data,
      errorCode => this.statusCode = errorCode);
  return this.allTag;
  }

}
