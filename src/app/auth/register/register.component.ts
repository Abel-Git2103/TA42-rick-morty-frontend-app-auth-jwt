import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = {
    id: 0,
    username: '',
    password: '',
    role: 'user',
  };

  submitted = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  newUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      role: this.user.role
    };

    this.loginService.add(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
