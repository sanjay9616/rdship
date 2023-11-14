import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  constructor(private commonService: CommonService,
    private alertMessageService: AlertMessageService,
    private router: Router) { }

  cartItems: Array<any> = this.commonService.getCartItems();
  priceDetails: Array<any> = this.cartItems.filter((item: any) => item).map((item: any) => ({markedPrice: Number(item.markedPrice)/Number(item.numberOfItem), sellingPrice: Number(item.sellingPrice)/Number(item.numberOfItem)}));

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['/']);
  }

  updateQty(i: number, addOrRemove: string, event?: any) {
    if(addOrRemove === 'add') {
      this.cartItems[i].numberOfItem += 1;
    } else if(addOrRemove === 'remove') {
      if(this.cartItems[i].numberOfItem > 1) {
        this.cartItems[i].numberOfItem -= 1;
      }
    } else if(addOrRemove === 'directChange') {
      if(event.target.value && Number(event.target.value) === 0) {
        event.target.value = 1;
        this.cartItems[i].numberOfItem = 1;
      } else if(event.target.value && Number(event.target.value > 0)) {
        this.cartItems[i].numberOfItem = event.target.value;
      } else {
        this.cartItems[i].numberOfItem = 1;
      }
    }
    this.cartItems[i].markedPrice = this.priceDetails[i].markedPrice * this.cartItems[i].numberOfItem;
    this.cartItems[i].sellingPrice = this.priceDetails[i].sellingPrice * this.cartItems[i].numberOfItem;
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
