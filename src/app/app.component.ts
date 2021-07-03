import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataAccessService } from './data-access/data-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fms-demo';
  isAuthenticated = false

  constructor(private router: Router, private dataAccess: DataAccessService) {
    this.dataAccess.getAuthentication().subscribe(
      res => {
        if(res == "1"){
          this.isAuthenticated = true;
        }else{
          this.isAuthenticated = false;
        }
      })
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.isAuthenticated = false;
    this.dataAccess.setAuthentication("0");
    this.router.navigate(['']);
  }
}
