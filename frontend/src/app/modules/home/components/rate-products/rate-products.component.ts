import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MESSAGES } from 'src/app/config/message';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-rate-products',
  templateUrl: './rate-products.component.html',
  styleUrls: ['./rate-products.component.scss']
})
export class RateProductsComponent implements OnInit {

  rating: number = 0;
  ratingText: string = '';
  review: FormControl = new FormControl(null);

  constructor(private authService: AuthService,
    private homeServie: HomeService,
    private alertMessage: AlertMessageService,
    public dialogRef: MatDialogRef<RateProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public itemId: string,
  ) { }

  ngOnInit() { }

  selectRating(rating: number, ratingText: string) {
    this.rating = rating;
    this.ratingText = ratingText;
  }

  submitProductReview() {
    if (!this.authService.getIsAuthenticated()) {
      this.alertMessage.addError(MESSAGES.ERROR.LOGIN_FIRST).show();
    } else {
      let payload = {
        review: this.review?.value,
        rating: this.rating,
        date: new Date().getTime(),
        userId: this.authService.getUserId(),
        name: this.authService.getUserDetail().name || 'Unknown User',
        isVerifiedPurchase: this.authService.getIsUserVerified(),
        likes: [],
        disLikes: [],
      }
      this.homeServie.submitProductReview(payload?.userId, this.itemId, payload).subscribe((res: any) => {
        if (res?.status == 200 && res?.success) {
          this.dialogRef.close(res?.data);
          this.alertMessage.addSuccess(MESSAGES.SUCCESS.REVIEW_SUBMITTED).show();
        } else {
          this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      }, (err: any) => {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      })
    }
  }
}
