import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  allUser: User[];
  statusCode: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }


  getAllUser(): User[] {
    this.userService.getAllUser()
      .subscribe(
        data => this.allUser = data,
        errorCode => this.statusCode = errorCode);
        console.log("g"+this.allUser);
        console.log("oooooooooooooooooooooo");
    return this.allUser;
  }

}
