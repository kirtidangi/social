import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AlertService } from 'src/app/service/alert.service';
import { RegisterService } from 'src/app/service/register-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public title = "Create Account";
  public createbutton = 'Create Account';

  public readonly facebookicon = faFacebookF;
  public readonly googleicon = faGoogle;

  public registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')]],

    })

  }

  onRegister() {
    this.registerService.register(this.registerForm.getRawValue()).subscribe({
      next: (data) => {
        if (data.success) {
          console.warn('registyer ------>', data.success, data)
          this.alertService.success(data.message)
          this.router.navigate(['/login'])
        } else {
          console.warn('^^^^^^^^^^^^2222', data)
          this.alertService.warn(data.message)
        }
      },
      error: (err) => {
        this.alertService.error('Something went wrong')
        console.warn('^^^^^^^^^^^^333', err)

      },
    });
  }
  public isFormValid(): boolean {
    return this.registerForm.invalid;
  }


}
