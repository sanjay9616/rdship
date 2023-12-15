import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { AuthService } from '../../services/auth.service';
import { MESSAGES } from "src/app/config/message";
import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';
import { URL_LIST } from 'src/app/config/urlList';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  showPassword: boolean = false;

  constructor(private authService: AuthService,
    private commonService: CommonService,
    private router: Router,
    private alertService: AlertMessageService,
    private authservice: AuthService) { }

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
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe((res: any) => {
        if (res.status == 200 && res.success) {
          this.alertService.addSuccess(MESSAGES.SUCCESS.LOGIN_SUCCESSFULL).show();
          this.authService.setUserId(res.data._id);
          this.getAuthData()
          this.router.navigate([URL_LIST.ROUTING_PATHS.HOME]);
        } else {
          this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      }, (err: any) => {
        if (err.error.status == 400 && !err.error.success) {
          this.alertService.addError(MESSAGES.ERROR.INVALID_CREDENTIAL).show();
        } else {
          this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      })
    }
  }

  getAuthData() {
    this.authService.getAuthData(localStorage.getItem('_id')).subscribe((res) => {
      if (res?.status == 200 && res?.success) {
        this.authService.setUserDetail(res.data);
        this.authService.setIsAuthenticated(true);
      }
    }, (err: any) => {
      this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })
  }

}
