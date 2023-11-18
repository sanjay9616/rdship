import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { AuthService } from '../../_services/auth.service';
import { MESSAGES } from 'src/app/config/message';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  formGroup!: FormGroup;
  passwordVisibility: any = { password: false, password2: false };

  constructor(private authService: AuthService,
    private alertService: AlertMessageService) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl(null, [Validators.required]),
      password2: new FormControl(null, [Validators.required])
    })
  }

  togglePasswordVisibility(formControlName: string) {
    this.passwordVisibility[formControlName] = !this.passwordVisibility[formControlName];
  }

  submit() {
    if (this.formGroup.get('password')?.value && this.formGroup.get('password2')?.value) {
      if (this.formGroup.get('password')?.value != this.formGroup?.get('password2')?.value) {
        this.formGroup?.get('password2')?.setErrors({ 'match': true })
      }
    }
    if (this.formGroup.valid) {
      let payload = { email: this.formGroup.get('email')?.value, password: this.formGroup.get('password')?.value }
      this.authService.forgetPassword(payload).subscribe((res: any) => {
        if (res?.status == 200 && res?.success) {
          this.alertService.addSuccess(MESSAGES.SUCCESS.PASSWORD_UPDATED).show();
        } else {
          this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      }, (err: any) => {
        if (err.error.status == 401 && !err.error.success) {
          this.alertService.addError(MESSAGES.ERROR.USER_NOT_EXISS).show();
        } else if (err.error.status == 409 && !err.error.success) {
          this.alertService.addError(MESSAGES.ERROR.ENTER_NEW_PASSWORD).show();
        } else {
          this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      })
    }
  }

}
