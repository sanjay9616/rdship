import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { MESSAGES } from 'src/app/config/message';
import { URL_LIST } from 'src/app/config/urlList';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  constructor(private commonService: CommonService,
    private alertMessage: AlertMessageService,
    private router: Router,
    private authService: AuthService,
    private homeService: HomeService) { }

  cartItems: Array<any> = [];
  cartItemsCopy: Array<any> = [];

  ngOnInit(): void {
    if (localStorage.getItem('_id')) this.getCartItems();
  }

  getCartItems() {
    this.homeService.getCartItems(localStorage.getItem('_id') || '').subscribe((res: any) => {
      if (res?.status == 200 && res?.success) {
        this.cartItems = res?.data;
        this.cartItemsCopy = [...res?.data.map(({ ...item }: any) => item)];
      } else {
        this.alertMessage.addSuccess(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      this.alertMessage.addSuccess(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })

  }

  home() {
    this.router.navigate([URL_LIST.ROUTING_PATHS.HOME]);
  }

  updateQty(i: number, addOrRemove: any) {
    if (addOrRemove == 'add') {
      this.cartItems[i].numberOfItem += Number(1);
    } else if (addOrRemove == 'remove') {
      if (this.cartItems[i].numberOfItem > 1) this.cartItems[i].numberOfItem -= Number(1);
    } else {
      this.cartItems[i].numberOfItem = Number(addOrRemove.target.value || 1);
    }
    this.cartItems[i].markedPrice = Number((Number(this.cartItemsCopy[i].markedPrice) / Number(this.cartItemsCopy[i].numberOfItem)) * (Number(this.cartItems[i].numberOfItem)));
    this.cartItems[i].sellingPrice = Number((Number(this.cartItemsCopy[i].sellingPrice) / Number(this.cartItemsCopy[i].numberOfItem)) * (Number(this.cartItems[i].numberOfItem)));
  }

  deleteCartItem(item: any) {
    this.homeService.deleteCartItem(this.authService.getUserId(), item._id).subscribe((res: any) => {
      if (res?.status == 200 && res?.success) {
        let itemIndex: number = this.cartItems.findIndex((cartItem) => cartItem._id == item._id);
        if (itemIndex > -1) {
          this.cartItems.splice(itemIndex, 1);
          this.cartItemsCopy.splice(itemIndex, 1);
          this.authService.setCartItems(res?.data);
        }
        this.alertMessage.addSuccess(MESSAGES.SUCCESS.ITEM_DELETED).show();
      } else {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })
  }

  calculateMarkedPrice() {
    let totalMarkedPrice: number = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      totalMarkedPrice += Number(this.cartItems[i].markedPrice);
    }
    return Number(totalMarkedPrice);
  }

  calculateSellingPrice() {
    let totalSellingPrice: number = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      totalSellingPrice += Number(this.cartItems[i].sellingPrice);
    }
    return Number(totalSellingPrice);
  }

  calculateDiscount() {
    let totalDiscount: number = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      totalDiscount += Number(Number(this.cartItems[i].markedPrice) - Number(this.cartItems[i].sellingPrice));
    }
    return Number(totalDiscount);
  }

  claculateDeliverCharges() {
    return 'Free'
  }

}
