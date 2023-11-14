import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { AuthService } from '../../_services/auth.service';
import { MESSAGES } from "src/app/config/message";
import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private commonService: CommonService,
    private router: Router,
    private alertService: AlertMessageService) { }

  formGroup!: FormGroup;
  showPassword: boolean = false;

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl(null, [Validators.required])
    })
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if(this.formGroup.valid) {
      let res: any = this.commonService.login(this.formGroup?.value);
      if(res?.status === 200 && res?.success) {
        this.authService.setToken(res?.data?.userId);
        this.alertService.addSuccess(res?.message || 'Login Successful').show();
        this.router.navigate(['/']);//auth Gaurd - set user details in service
      } else {
        this.alertService.addError(res?.message || 'Login failed! Try again.').show();
        this.formGroup.reset();
      }
    }
  }
}
