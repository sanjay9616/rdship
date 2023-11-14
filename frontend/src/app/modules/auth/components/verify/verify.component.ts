import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MESSAGES } from 'src/app/config/message';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private alertService: AlertMessageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      mobileNo: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{10}')]),
    })
  }

  verifyUser() {
    if(this.formGroup.valid) {
      this.authService.verifyUser(this.formGroup.value).subscribe((res: any) => {
        if(res?.status == 200) {

        }
      }, (err: any) => {
        this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG);
      })
    }
  }

}
