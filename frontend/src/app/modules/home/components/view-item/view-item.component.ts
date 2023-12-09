import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { FormControl, Validators } from '@angular/forms';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { URL_LIST } from 'src/app/config/urlList';
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

  constructor(private commonService: CommonService,
    private router: Router,
    private alertMessageService: AlertMessageService,
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    public dialog: MatDialog,
    private authService: AuthService,
    private alertMessage: AlertMessageService) { }

  params: any = {};
  itemDetails: any = {};
  itemDetailsCopy: any = {};
  similarProducts: Array<any> = [];
  reviews: Array<any> = [];
  isShowViewMore: boolean = false;
  markedPrice: number = 0;
  sellingPrice: number = 0;
  imgUrl: string = '';
  numberOfItem: FormControl = new FormControl(null);


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((routeParams: any) => {
      this.params = routeParams?.itemId;
      this.isShowViewMore = false;
      this.getItemInfo();
    })
  }

  updateQty(addRemove?: string) {
    if(addRemove == 'add') {
      this.numberOfItem.patchValue(this.numberOfItem?.value + 1);
    } else if(addRemove == 'remove') {
      if(this.numberOfItem?.value > 1) this.numberOfItem.patchValue(this.numberOfItem?.value - 1);
    } else {
      this.numberOfItem.patchValue(this.numberOfItem?.value);
    }
    this.itemDetails.markedPrice = this.itemDetailsCopy.markedPrice * (this.numberOfItem?.value || 1);
    this.itemDetails.sellingPrice = this.itemDetailsCopy.sellingPrice * (this.numberOfItem?.value || 1);
  }

  getItemInfo() {
    this.homeService.getItemInfo(this.params).subscribe((res: any) => {
      if(res?.status == 200 && res?.success) {
        this.itemDetails = res?.data?.itemDetails;
        console.log('itemDetails', this.itemDetails);
        this.similarProducts = res?.data?.similarProducts;
        this.itemDetailsCopy = {...res?.data?.itemDetails};
        this.imgUrl = this.itemDetails?.imgUrls[0];
        this.numberOfItem.patchValue(this.itemDetails?.numberOfItem)
      } else {
        this.alertMessageService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      this.alertMessageService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })
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

  addItemsToCart(item: any) {
    event?.stopPropagation();
    this.homeService.addCartItem(this.authService.getUserId(), item).subscribe((res: any) => {
      if(res?.status == 204 && res?.success) {
        this.alertMessage.addWarning('Item Already Exits in the Cart.').show();
      } else if(res?.status == 200 && res?.success) {
        this.authService.setCartItems(res?.data);
        this.alertMessage.addSuccess('Item Added Successfully in the Cart.').show();
      } else {
        this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      this.alertMessage.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
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
