import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MESSAGES } from 'src/app/config/message';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-ask-qaestions',
  templateUrl: './ask-qaestions.component.html',
  styleUrls: ['./ask-qaestions.component.scss']
})
export class AskQaestionsComponent {

  question: FormControl = new FormControl(null);

  constructor(private authService: AuthService,
    private homeServie: HomeService,
    private alertMessage: AlertMessageService, public dialogRef: MatDialogRef<AskQaestionsComponent>,
    @Inject(MAT_DIALOG_DATA) public itemId: string
  ) { }

  ngOnInit() { }

  submitQestion() {
    if (!this.authService.getIsAuthenticated()) {
      this.alertMessage.addError(MESSAGES.ERROR.LOGIN_FIRST).show();
    } else {
      let payload = {
        question: this.question?.value,
        date: new Date().getTime(),
        userId: this.authService.getUserId(),
        name: this.authService.getUserDetail().name || 'Unknown User',
        isVerifiedPurchase: this.authService.getIsUserVerified(),
        likes: [],
        disLikes: [],
      }
      this.homeServie.submitQuestion(payload?.userId, this.itemId, payload).subscribe((res: any) => {
        if (res?.status == 200 && res?.success) {
          this.dialogRef.close(res?.data);
          this.alertMessage.addSuccess(MESSAGES.SUCCESS.QUESTION_SUBMITTED).show();
        } else {
          this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      }, (err: any) => {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      })
    }
  }
}

