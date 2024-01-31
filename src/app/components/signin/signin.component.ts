import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private router: Router,private authService: AuthService) { }

  onSubmit() {
    // Check for empty strings
    if (this.user.username.trim() === '' || this.user.password.trim() === '') {
      alert('Please enter both username and password.');
      return;
    }

    // Handle the form submission logic here
    console.log('Submitted:', this.user);
    // You can add your authentication logic here

    this.authService.login(this.user.username, this.user.password).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem("token",res.token);
      this.router.navigate(['/products'])

      
    },
      (error) => {
        console.log("PSignin Failed");
        console.log(error);
      })


  }
}
