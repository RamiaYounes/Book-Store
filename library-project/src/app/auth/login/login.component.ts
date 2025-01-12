import { Component } from '@angular/core';
import { IUser } from '../../users';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public user: IUser;
  message: any;
  userInfo: any;
  constructor(private _userServer: UserService, private router: Router) {
    this.user = {
      first_name: '',
      last_name: '',
      role: '',
      id: 0,
      password: '',
      email: '',
    };
  }

  login() {
    this._userServer.login(this.user).subscribe(
      (data) => {
        this.userInfo = data;
        console.log(data);
        localStorage.setItem('token', this.userInfo.token);
        let url = localStorage.getItem('url');
        if (url) {
          this.router.navigate([url]).then(() => {
            window.location.reload();
          });
        } else {
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });
        }
      },
      (error) => {
        if (error.status === 400) {
          console.log(error.error['detail']);
          window.scrollTo(0, 0);
          this.message = error.error['detail'];
        }
      }
    );
  }
}
