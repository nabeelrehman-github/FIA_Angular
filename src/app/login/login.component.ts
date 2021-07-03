import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../request-models/login-request';
import { DataAccessService } from '../data-access/data-access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginRequest = new LoginRequest();
  isInvalid = false;

  constructor(
    private dataService: DataAccessService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  closePopup() {
    this.isInvalid = false;
  }

  attemptLogin() {
    console.log(this.user)
    this.dataService.authorizeLogin(this.user).subscribe(
      res => {
        if (res.responseCode == 4000) { // Login Successful

          this.dataService.setAuthentication("1");
          console.log(this.user.userId)
          sessionStorage.setItem("userId", this.user.userId);

          if (res.roleId == 1) {
            this.router.navigate(['./admin-home-page']);
          } else {
            this.router.navigate(['./double-entry-home/receipt-section']);
          }
        } else {
          this.isInvalid = true;
        }
      }
    );
  }

}
