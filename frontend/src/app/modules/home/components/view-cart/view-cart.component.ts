import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { URL_LIST } from 'src/app/config/urlList';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  constructor(private commonService: CommonService,
    private alertMessageService: AlertMessageService,
    private router: Router,
    private authService: AuthService) { }

  cartItems: Array<any> = [];// call api

  ngOnInit(): void {
    console.log('cartItems', this.cartItems);
    console.log('authService', this.authService.getIsAuthenticated());
  }

  home() {
    this.router.navigate([URL_LIST.ROUTING_PATHS.HOME]);
  }

  updateQty(i: number, addOrRemove: string, event?: any) {
  }

  removeItemsToCart(item: any) {
    this.commonService.removeItemsToCart(item);
    this.alertMessageService.addSuccess('Item removed successfully').show();
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
