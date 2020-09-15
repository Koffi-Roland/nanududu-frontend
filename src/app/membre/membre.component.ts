import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.scss']
})
export class MembreComponent {
  title = 'nanududu-frontend';

  constructor(private loginService: LoginService,private router: Router,) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/accueil']);

    
  }

}
