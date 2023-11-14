import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { AuthService } from '../../_services/auth.service';
import { MESSAGES } from "src/app/config/message";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {

  formGroup!: FormGroup;
  passwordVisibility: any = {password: false, password2: false};

  constructor(private authService: AuthService,
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
    if(this.formGroup.get('password')?.value && this.formGroup.get('password2')?.value) {
      if(this.formGroup.get('password')?.value!=this.formGroup?.get('password2')?.value) {
        this.formGroup?.get('password2')?.setErrors({'match': true})
      }
    }
    if(this.formGroup?.valid) {
      this.authService.signUp(this.formGroup.value).subscribe((res: any) => {
        if(res?.status === 200) {
          this.alertService.addSuccess(res?.message).show();
        }
      }, (err: any) => {
        this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      })
    }
  }
}
