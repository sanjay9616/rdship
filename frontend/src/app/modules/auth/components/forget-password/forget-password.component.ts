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
  passwordVisibility: any = {password: false, password2: false};

  constructor(private authService: AuthService,
    private alertMessage: AlertMessageService) { }

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
    if(this.formGroup.get('password')?.value && this.formGroup.get('password2')?.value) {
      if(this.formGroup.get('password')?.value!=this.formGroup?.get('password2')?.value) {
        this.formGroup?.get('password2')?.setErrors({'match': true})
      }
    }
    if(this.formGroup.valid) {
      this.authService.forgetPassword(this.formGroup.value).subscribe((res: any) => {
        if(res?.status == 200) {

        }
      }, (err: any) => {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG);
      })
    }
  }

}
