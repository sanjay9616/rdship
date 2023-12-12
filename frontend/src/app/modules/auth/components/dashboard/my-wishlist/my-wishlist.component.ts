import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { MESSAGES } from 'src/app/config/message';
import { URL_LIST } from 'src/app/config/urlList';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.scss']
})
export class MyWishlistComponent {
  constructor(private commonService: CommonService,
    private router: Router,
    private homeService: HomeService,
    private alertMessage: AlertMessageService,
    private authService: AuthService) {

  }

  wishList: Array<any> = [];

  ngOnInit(): void {
    this.getFavoriteItems();
  }

  home() {
    this.router.navigate([URL_LIST.ROUTING_PATHS.HOME]);
  }

  getFavoriteItems() {
    this.homeService.getFavoriteItems(localStorage.getItem('_id') || '').subscribe((res: any) => {
      if (res?.status == 200 && res?.success) {
        this.wishList = res?.data;
      } else {
        this.alertMessage.addSuccess(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      this.alertMessage.addSuccess(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })
  }

  deleteFavoriteItem(item: any) {
    this.homeService.deleteFavoriteItem(this.authService.getUserId(), item._id).subscribe((res: any) => {
      if (res?.status == 200 && res?.success) {
        let itemIndex: number = this.wishList.findIndex((favorite) => favorite._id == item._id);
        if (itemIndex > -1) {
          this.wishList.splice(itemIndex, 1);
          this.authService.setFevoriteItems(res?.data);
        }
        this.alertMessage.addSuccess(MESSAGES.SUCCESS.ITEM_DELETED).show();
      } else {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })
  }
}
