import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { MatDialog } from '@angular/material/dialog';
import { RateProductsComponent } from '../rate-products/rate-products.component';
import { HomeService } from '../../services/home.service';
import { MESSAGES } from 'src/app/config/message';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  params: any = {};
  itemDetails: any = {};
  itemDetailsCopy: any = {};
  similarProducts: Array<any> = [];
  isShowViewMore: boolean = false;
  imgUrl: string = '';

  constructor(private router: Router,
    private alertMessageService: AlertMessageService,
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    public dialog: MatDialog,
    private authService: AuthService,
    private alertMessage: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((routeParams: any) => {
      this.params = routeParams?.itemId;
      this.isShowViewMore = false;
      this.getItemInfo();
    })
  }

  getItemInfo() {
    this.homeService.getItemInfo(this.params).subscribe((res: any) => {
      if (res?.status == 200 && res?.success) {
        this.itemDetails = res?.data?.itemDetails;
        this.similarProducts = res?.data?.similarProducts;
        this.itemDetailsCopy = { ...res?.data?.itemDetails };
        this.imgUrl = this.itemDetails?.imgUrls[0];
        this.itemDetails = this.authService.addIsFavoriteAndIsCartItemKey(this.itemDetails);
        this.similarProducts = this.authService.addIsFavoriteAndIsCartItemsKey(this.similarProducts);
        this.addRecentlyViewItems(this.itemDetails);
      } else {
        this.alertMessageService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      this.alertMessageService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })
  }

  addRecentlyViewItems(item: any) {
    let payload = { ...item };
    payload.markedPrice = this.itemDetailsCopy?.markedPrice;
    payload.sellingPrice = this.itemDetailsCopy?.sellingPrice;
    this.homeService.addRecentlyViewItems(this.authService.getUserId(), payload).subscribe((res: any) => {
      if (res?.status == 200 && res?.success) { }
    })
  }

  updateQty(addRemove: any) {
    if (addRemove == 'add') {
      this.itemDetails.numberOfItem += Number(1);
    } else if (addRemove == 'remove') {
      if (this.itemDetails.numberOfItem > 1) this.itemDetails.numberOfItem -= Number(1);
    } else {
      this.itemDetails.numberOfItem = Number(addRemove.target.value || 1);
    }
    this.itemDetails.markedPrice = this.itemDetailsCopy.markedPrice * (this.itemDetails.numberOfItem || 1);
    this.itemDetails.sellingPrice = this.itemDetailsCopy.sellingPrice * (this.itemDetails.numberOfItem || 1);
  }

  addCartItem(item: any, isViewItem: boolean) {
    event?.stopPropagation();
    let payload = { ...item };
    payload.markedPrice = this.itemDetailsCopy?.markedPrice;
    payload.sellingPrice = this.itemDetailsCopy?.sellingPrice;
    this.homeService.addCartItem(this.authService.getUserId(), payload).subscribe((res: any) => {
      if (res?.status == 204 && res?.success) {
        this.alertMessage.addWarning('Item Already Exits in the Cart.').show();
      } else if (res?.status == 200 && res?.success) {
        this.authService.setCartItems(res?.data);
        if (isViewItem) this.itemDetails = this.authService.addIsFavoriteAndIsCartItemKey(this.itemDetails);
        if (!isViewItem) this.similarProducts = this.authService.addIsFavoriteAndIsCartItemsKey(this.similarProducts);
        this.alertMessage.addSuccess('Item Added Successfully in the Cart.').show();
      } else {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })
  }

  addRemoveFavoriteItem(item: any, isViewItem: boolean) {
    event?.stopPropagation();
    if (item?.isFavorite) {
      this.homeService.deleteFavoriteItem(this.authService.getUserId(), item._id).subscribe((res: any) => {
        if (res?.status == 200 && res?.success) {
          this.authService.setFevoriteItems(res?.data);
          if (isViewItem) this.itemDetails = this.authService.addIsFavoriteAndIsCartItemKey(this.itemDetails);
          if (!isViewItem) this.similarProducts = this.authService.addIsFavoriteAndIsCartItemsKey(this.similarProducts);
          this.alertMessage.addSuccess(MESSAGES.SUCCESS.FAVORITE_ITEM_DELETED).show();
        } else {
          this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      }, (err: any) => {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      })
    } else {
      let payload = { ...item };
      if (isViewItem) {
        payload.markedPrice = this.itemDetailsCopy?.markedPrice;
        payload.sellingPrice = this.itemDetailsCopy?.sellingPrice;
      }
      this.homeService.addFavoriteItem(this.authService.getUserId(), payload).subscribe((res: any) => {
        if (res?.status == 204 && res?.success) {
          this.alertMessage.addWarning(MESSAGES.WARNING.ALREADY_ADDED_IN_WISH_LIST).show();
        } else if (res?.status == 200 && res?.success) {
          this.authService.setFevoriteItems(res?.data);
          if (isViewItem) this.itemDetails = this.authService.addIsFavoriteAndIsCartItemKey(this.itemDetails);
          if (!isViewItem) this.itemDetails = this.authService.addIsFavoriteAndIsCartItemsKey(this.similarProducts);
          this.alertMessage.addSuccess(MESSAGES.SUCCESS.ADDED_FAVORITE_ITEM).show();
        } else {
          this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
        }
      }, (err: any) => {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      })
    }
  }

  selectImg(imgUrl: string) {
    this.imgUrl = imgUrl;
  }

  viewMoreReview() {
    this.isShowViewMore = true;
  }

  viewItemDetail(item: any) {
    this.router.navigate([`view-item/${item?._id}`]);
  }

  changeSpecification(itemId: string, i: number, j: number, name: any, value: any) {
    this.itemDetails.filterAttributesList[i].items = this.itemDetails.filterAttributesList[i].items.map((item: any) => ({ value: item.value, selected: false }));
    this.itemDetails.filterAttributesList[i].items[j].selected = true;
    this.itemDetails.activeProduct[name] = value;
    this.changeProductSpecification(itemId, this.itemDetails.activeProduct)
  }

  changeProductSpecification(itemDescription: string, activeProduct: any) {
    this.homeService.changeProductSpecification(itemDescription, activeProduct).subscribe((res: any) => {
      if (res?.status == 200 && res?.success) {
        this.itemDetails = res?.data?.itemDetails;
        this.similarProducts = res?.data?.similarProducts;
        this.itemDetailsCopy = { ...res?.data?.itemDetails };
        this.itemDetails = this.authService.addIsFavoriteAndIsCartItemKey(this.itemDetails);
        this.similarProducts = this.authService.addIsFavoriteAndIsCartItemsKey(this.similarProducts);
        this.imgUrl = this.itemDetails?.imgUrls[0];
        this.addRecentlyViewItems(this.itemDetails);
      } else {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      if (err?.error?.status == 400 && !err?.error?.success) {
        this.alertMessage.addError(err?.error?.message || MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      } else {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    })
  }

  rateProduct() {
    const dialogRef = this.dialog.open(RateProductsComponent, {
      width: '50%',
      maxHeight: 'unset',
      panelClass: 'rate-products',
    });
  }

}
