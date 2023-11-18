import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { AuthService } from '../../_services/auth.service';
import { MESSAGES } from "src/app/config/message";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  formGroup!: FormGroup;
  passwordVisibility: any = { password: false, password2: false };

  constructor(private authService: AuthService,
    private router: Router,
    private alertService: AlertMessageService) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      mobileNo: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{10}')]),
      password: new FormControl(null, [Validators.required]),
      password2: new FormControl(null, [Validators.required]),
    })
  }

  togglePasswordVisibility(formControlName: string) {
    this.passwordVisibility[formControlName] = !this.passwordVisibility[formControlName];
  }

  register() {
    if (this.formGroup.get('password')?.value && this.formGroup.get('password2')?.value) {
      if (this.formGroup.get('password')?.value != this.formGroup?.get('password2')?.value) {
        this.formGroup?.get('password2')?.setErrors({ 'match': true })
      }
    }
    if (this.formGroup?.valid) {
      let payload = { ...this.formGroup.value }
      if (payload.password2) delete payload.password2
      this.authService.signUp(payload).subscribe((res: any) => {
        if (res?.status === 200 && res.success) {
          this.alertService.addSuccess(MESSAGES.SUCCESS.ACCOUNT_CREATED).show();
          this.router.navigate(['/account/login']);
        } else {
          this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      }, (err: any) => {
        if (err.error.status == 409 && !err.error.success) {
          this.alertService.addWarning(MESSAGES.ERROR.USER_EXITS).show();
        } else {
          this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      })
    }
  }
}
