import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/common.service';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { NgImageSliderComponent } from 'ng-image-slider';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { URL_LIST } from 'src/app/config/urlList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageObject: Array<any> = [
    {
      image: '/assets/img/offers/1.webp',
      thumbImage: '/assets/img/offers/1.webp',
      title: 'Hummingbirds are amazing creatures'
    },
    {
      image: '/assets/img/offers/2.webp',
      thumbImage: '/assets/img/offers/2.webp'
    },
    {
      image: '/assets/img/offers/3.webp',
      thumbImage: '/assets/img/offers/3.webp',
      title: 'Hummingbirds are amazing creatures'
    },
  ]
  @ViewChild('nav') slider!: NgImageSliderComponent;
  categoryList: Array<any> = [
    { type: 'Grocery', offer: 'Upto 80% Off', text: 'Buy Now!', url: '/assets/img/grocery/1.webp', routerLink: "/category/Grocery" },
    { type: 'Medicines', offer: 'Upto 80% Off', text: 'Buy Now!', url: '/assets/img/medicines/1.webp', routerLink: "/medicines" },
    { type: 'Home & Furniture', offer: 'Upto 80% Off', text: 'Buy Now!', url: '/assets/img/furniture/1.webp', routerLink: "/furniture" },
    { type: 'Electronics', offer: 'Upto 80% Off', text: 'Buy Now!', url: '/assets/img/electronics/1.webp', routerLink: "/electronics" },
    { type: 'Fashion', offer: 'Upto 80% Off', text: 'Buy Now!', url: '/assets/img/fashion/1.webp', routerLink: "/fasion" },
    { type: 'Agricultural', offer: 'Upto 80% Off', text: 'Buy Now!', url: '/assets/img/fashion/1.webp', routerLink: "/fasion" },
  ]
  items: Array<any> = this.commonService.items;
  recentlyViewedProducts: Array<any> = this.commonService.items.filter((item: any) => item.category === 'Grocery' && item.subCategory === 'Rice');
  topSellingProducts: Array<any> = this.commonService.sortItemsBySelling(this.items).slice(0, 20);


  constructor(private router: Router,
    private location: Location,
    private commonService: CommonService,
    private alertMessageService: AlertMessageService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {}

  imageClick() {
    console.log(this.slider);
  }

  viewProduct(item: any) {
    this.router.navigate([`category/${item.category}/subCategory/${item.subCategory}/itemId/${item.itemId}`]);
  }

  addItemsToCart(item: any) {
    event?.stopPropagation();
    let found: boolean = this.commonService.addItemsToCart(item);
    if (!found) {
      this.alertMessageService.addSuccess('Item added successfully').show();
      this.router.navigate([URL_LIST.ROUTING_PATHS.VIEW_CART]);
    } else {
      this.alertMessageService.addError('Item already added').show();
    }
  }

}
