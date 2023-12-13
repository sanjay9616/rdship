import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/common.service';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { NgImageSliderComponent } from 'ng-image-slider';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { HomeService } from '../../services/home.service';
import { MESSAGES } from 'src/app/config/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('nav') slider!: NgImageSliderComponent;
  imageObject: Array<any> = [
    { image: '/assets/img/offers/1.webp', thumbImage: '/assets/img/offers/1.webp', title: 'Hummingbirds are amazing creatures' },
    { image: '/assets/img/offers/2.webp', thumbImage: '/assets/img/offers/2.webp' },
    { image: '/assets/img/offers/3.webp', thumbImage: '/assets/img/offers/3.webp', title: 'Hummingbirds are amazing creatures' },
  ]
  categoryList: Array<any> = [
    { type: 'Grocery', url: '/assets/img/grocery/1.webp', routerLink: "/category/Grocery" },
    { type: 'Medicines', url: '/assets/img/medicines/1.webp', routerLink: "/category/Medicines" },
    { type: 'Furniture', url: '/assets/img/furniture/1.webp', routerLink: "/category/Furniture" },
    { type: 'Electronics', url: '/assets/img/electronics/1.webp', routerLink: "/category/Electronics" },
    { type: 'Fashion', url: '/assets/img/fashion/1.webp', routerLink: "/category/Fashion" },
    { type: 'Agricultural', url: '/assets/img/agricultural/1.jpg', routerLink: "/category/Agricultural" },
  ]
  sellerList: Array<any> = [
    { type: 'Besure Pharmacy', url: '/assets/img/seller-list/1.webp', text: "A drug Store/Pharmacy/Community Pharmacy/chemist's is a retail shop which provides prescription drugs, among other products" },
    { type: 'Style Fusion', url: '/assets/img/seller-list/2.jpg', text: "A budget-friendly clothing store that has colorful and trendy pieces for men and women. Their selection of graphic tees, sweatpants and joggers, and sneakers" },
    { type: 'Fresh Fields', url: '/assets/img/seller-list/3.jpeg', text: "A agricutural products deals with the farming, production, selling, and administration of agricultural products such grains, vegetables, fruits, and cattle" },
    { type: 'Lightning Bolt Electronics.', url: '/assets/img/seller-list/4.webp', text: "A retail establishment used for the selling or repairing of consumer electronic products such as televisions, telephones, personal computers, watch and other electronic gadgets" },
    { type: 'Daily Delicacies Grocer', url: '/assets/img/seller-list/5.jpg', text: "A grocery shops that serve daily needs grocery items include beauty, salons, frozen foods, dry fruits, biscuit, rice, household and cleaners, oil, kitchen and others." },
    { type: 'Neighborhood Furniture', url: '/assets/img/seller-list/6.webp', text: "A furniture shop that serve, household equipment, usually made of wood, metal, plastics, marble, glass, fabrics, or related materials and having a variety of different purposes." },
  ]
  recentlyViewItems: Array<any> = [];
  topSellingProducts: Array<any> = [];

  constructor(private router: Router,
    private alertService: AlertMessageService,
    private authService: AuthService,
    private homeService: HomeService,
    private alertMessage: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.getHomeDetails();
  }

  getHomeDetails() {
    this.homeService.getHomeDetails(this.authService.getUserId()).subscribe((res: any) => {
      if (res?.status == 200 && res?.success) {
        this.recentlyViewItems = this.authService.addIsFavoriteAndIsCartItemsKey(res?.data?.recentlyViewItems);
        this.topSellingProducts = this.authService.addIsFavoriteAndIsCartItemsKey(res?.data?.topSellingProducts);
      } else {
        this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })
  }

  viewOffer() {
    console.log(this.slider);
  }

  addCartItem(item: any) {
    event?.stopPropagation();
    this.homeService.addCartItem(this.authService.getUserId(), item).subscribe((res: any) => {
      if (res?.status == 204 && res?.success) {
        this.alertMessage.addWarning('Item Already Exits in the Cart.').show();
      } else if (res?.status == 200 && res?.success) {
        this.authService.setCartItems(res?.data);
        this.alertMessage.addSuccess('Item Added Successfully in the Cart.').show();
      } else {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })
  }

  addRemoveFavoriteItem(item: any) {
    event?.stopPropagation();
    if (item?.isFavorite) {
      this.homeService.deleteFavoriteItem(this.authService.getUserId(), item._id).subscribe((res: any) => {
        if (res?.status == 200 && res?.success) {
          this.authService.setFevoriteItems(res?.data);
          this.recentlyViewItems = this.authService.addIsFavoriteAndIsCartItemsKey(this.recentlyViewItems);
          this.topSellingProducts = this.authService.addIsFavoriteAndIsCartItemsKey(this.topSellingProducts);
          this.alertMessage.addSuccess(MESSAGES.SUCCESS.FAVORITE_ITEM_DELETED).show();
        } else {
          this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      }, (err: any) => {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      })
    } else {
      this.homeService.addFavoriteItem(this.authService.getUserId(), item).subscribe((res: any) => {
        if (res?.status == 204 && res?.success) {
          this.alertMessage.addWarning(MESSAGES.WARNING.ALREADY_ADDED_IN_WISH_LIST).show();
        } else if (res?.status == 200 && res?.success) {
          this.authService.setFevoriteItems(res?.data);
          this.recentlyViewItems = this.authService.addIsFavoriteAndIsCartItemsKey(this.recentlyViewItems);
          this.topSellingProducts = this.authService.addIsFavoriteAndIsCartItemsKey(this.topSellingProducts);
          this.alertMessage.addSuccess(MESSAGES.SUCCESS.ADDED_FAVORITE_ITEM).show();
        } else {
          this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      }, (err: any) => {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      })
    }
  }

  viewItemDetail(item: any) {
    this.router.navigate([`view-item/${item?._id}`]);
  }

}
