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
        for (let i = 0; i < this.cartItems.length; i++) {
          this.cartItems[i].markedPrice = Number(Number(this.cartItemsCopy[i].markedPrice) * Number(this.cartItems[i].numberOfItem));
          this.cartItems[i].sellingPrice = Number(Number(this.cartItemsCopy[i].sellingPrice) * Number(this.cartItems[i].numberOfItem));
        }
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

  updateQty(i: number, addOrRemove: any, itemId: string) {
    if (addOrRemove == 'add') {
      this.cartItems[i].numberOfItem += Number(1);
      this.cartItems[i].markedPrice = Number(Number(this.cartItemsCopy[i].markedPrice) * Number(this.cartItems[i].numberOfItem));
      this.cartItems[i].sellingPrice = Number(Number(this.cartItemsCopy[i].sellingPrice) * Number(this.cartItems[i].numberOfItem));
      this.updateCartQty(i, itemId);
    } else if (addOrRemove == 'remove') {
      if (this.cartItems[i].numberOfItem > 1) {
        this.cartItems[i].numberOfItem -= Number(1);
        this.cartItems[i].markedPrice = Number(Number(this.cartItemsCopy[i].markedPrice) * Number(this.cartItems[i].numberOfItem));
        this.cartItems[i].sellingPrice = Number(Number(this.cartItemsCopy[i].sellingPrice) * Number(this.cartItems[i].numberOfItem));
        this.updateCartQty(i, itemId);
      };
    } else {
      if (addOrRemove.target.value) {
        this.cartItems[i].numberOfItem = Number(addOrRemove.target.value || 1);
        this.cartItems[i].markedPrice = Number(Number(this.cartItemsCopy[i].markedPrice) * Number(this.cartItems[i].numberOfItem));
        this.cartItems[i].sellingPrice = Number(Number(this.cartItemsCopy[i].sellingPrice) * Number(this.cartItems[i].numberOfItem));
        this.updateCartQty(i, itemId);
      }
    }
  }

  updateCartQty(i: number, itemId: string) {
    this.homeService.updateCartQty(this.authService.getUserId(), itemId, { numberOfItem: this.cartItems[i].numberOfItem }).subscribe((res: any) => {
      if (res?.status == 200 && res?.success) {
        this.alertMessage.addSuccess(MESSAGES.SUCCESS.CART_QTY_UPDATED).show();
      } else {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      if (err?.error?.status == 400 && !err?.error?.success) {
        this.alertMessage.addError(MESSAGES.ERROR.QTY_GREATER_THEN_ONE).show();
      } else if (err?.error?.status == 409 && !err?.error?.success) {
        this.alertMessage.addWarning(err?.error?.message).show();
      } else {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    })
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
      totalDiscount += Number(this.cartItems[i].markedPrice - this.cartItems[i].sellingPrice);
    }
    return Number(totalDiscount);
  }

  claculateDeliverCharges() {
    return 'Free'
  }

  viewItemDetail(item: any) {
    this.router.navigate([`view-item/${item?._id}`]);
  }

}
