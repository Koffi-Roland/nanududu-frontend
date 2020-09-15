import { Component, OnInit } from '@angular/core';
import { connect } from 'http2';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  connected: boolean;
  constructor(private loginService: LoginService) {


  }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn() {
    this.connected = this.loginService.isLoggedIn();
  }

  logout() {
    this.loginService.logout();
    this.isLoggedIn();
  }

}
