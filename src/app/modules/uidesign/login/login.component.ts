import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AlertService } from 'src/app/service/alert.service';
import { LoginService } from 'src/app/service/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public title = 'Log in';
  public loginbutton = 'Login';

  public readonly facebookicon = faFacebookF;
  public readonly googleicon = faGoogle;

  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$'
          ),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    this.loginService.login(this.loginForm.getRawValue()).subscribe({
      next: (data) => {
        if (data.success) {
          // console.warn('registyer ------>', data.success, data);
          this.alertService.success(data.message);
          this.router.navigate(['/quiz']);
        } else {
          // console.warn('^^^^^^^^^^^^2222', data);
          this.alertService.warn(data.message);
        }
      },
      error: (err) => {
        this.alertService.error('Something went wrong');
        console.warn('^^^^^^^^^^^^333', err);
      },
    });
  }
  public isFormValid(): boolean {
    return this.loginForm.invalid;
  }


}
