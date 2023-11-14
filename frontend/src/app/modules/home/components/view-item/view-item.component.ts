import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { FormControl, Validators } from '@angular/forms';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  constructor(private commonService: CommonService,
    private router: Router,
    private alertMessageService: AlertMessageService,
    private activatedRoute: ActivatedRoute) { }

  params: any = {};
  itemDetails: any = {};
  similarProducts: Array<any> = [];
  reviews: Array<any> = [];
  isShowViewMore: boolean = false;
  markedPrice: number = 0;
  sellingPrice: number = 0;
  imgUrl: string = '';
  // formGroup: FormGroup = new FormGroup({});
  // unit: any = [
  //   { unit: 'quantity', view: 'Quantity', list: [{ value: 1, unit: 'kg', packOf: 1, itemId: '1kg' }, { value: 2, unit: 'kg', packOf: 2, itemId: '2kg' }] },
  //   { unit: 'size', view: 'Size', list: [{ value: 1, unit: 'cm', packOf: 1, itemId: '1cm' }, { value: 2, unit: 'cm', packOf: 2, itemId: '2cm' }] }
  // ]

  numberOfItem: FormControl = new FormControl(1);

  ngOnInit(): void {
    // for (let i = 0; i < this.unit.length; i++) {
    //   this.formGroup.addControl(this.unit[i].unit, new FormControl(this.unit[i].list[0].value));
    // }
    this.activatedRoute.params.subscribe((routeParams: any) => {
      this.params = routeParams;
      this.itemDetails = this.commonService.items.filter((item: any) => item.itemId == this.params.itemId)[0];
      this.similarProducts = this.commonService.items.filter((item: any) => item.category === this.params.category && item.subCategory === this.params.subCategory);
      this.reviews = this.itemDetails.ratingsAndReviews.filter((review: any) => review.review);
      this.imgUrl = this.itemDetails.imgUrls[0];
      this.markedPrice = this.itemDetails.markedPrice;
      this.sellingPrice = this.itemDetails.sellingPrice;
      this.numberOfItem.patchValue(this.itemDetails.numberOfItem);
      this.isShowViewMore = false;
    })
  }

  // changeUnitOfItem(unit: string, event: any) {
  //   this.formGroup.get(unit)?.patchValue(event.value);
  // }

  selectImg(imgUrl: string) {
    this.imgUrl = imgUrl;
  }

  updateQty(addOrRemove?: string) {
    if(this.numberOfItem.value == 0) this.numberOfItem.patchValue(1);
    if (addOrRemove == 'add') {
      this.numberOfItem.patchValue(this.numberOfItem.value + 1);
    } else if(addOrRemove == 'remove') {
      if (this.numberOfItem.value > 1) this.numberOfItem.patchValue(this.numberOfItem.value - 1);
    }
    this.itemDetails.numberOfItem = this.numberOfItem.value || 1;
    this.itemDetails.markedPrice = this.itemDetails.numberOfItem * this.markedPrice;
    this.itemDetails.sellingPrice = this.itemDetails.numberOfItem * this.sellingPrice;
  }

  viewMoreReview() {
    this.isShowViewMore = true;
  }

  viewItemDetail(item: any) {
    this.router.navigate([`category/${item.category}/subCategory/${item.subCategory}/itemId/${item.itemId}`]);
  }

  addItemsToCart(item: any) {
    event?.stopPropagation();
    let found: boolean = this.commonService.addItemsToCart(item);
    if(!found) {
      this.alertMessageService.addSuccess('Item added successfully').show();
      this.router.navigate(['/view-cart']);
    } else {
      this.alertMessageService.addError('Item already added').show();
    }
  }

  buyNow() {
    this.router.navigate(['/view-cart'])
  }

}
