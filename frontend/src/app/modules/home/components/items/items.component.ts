import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  distinctUntilChanged, startWith } from 'rxjs/operators';
import { MESSAGES } from 'src/app/config/message';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private alertMessageService: AlertMessageService,
    private homeService: HomeService,
    private router: Router) { }

  formGroup!: FormGroup;
  isOpenFilers: boolean = false;
  toggleAllBrandsCheckboxState: boolean = false;
  toggleAllSubcategoriesCheckboxState: boolean = false;
  routeParams: any = {};
  subCategoriesListOptions: Array<any> = [];
  brandsListOptions: Array<any> = [];
  priceList: Array<any> = [
    { view: '₹1000 or lower', value: 1000 },
    { view: '₹900 or lower', value: 900 },
    { view: '₹800 or lower', value: 800 },
    { view: '₹700 or lower', value: 700 },
    { view: '₹600 or lower', value: 600 },
    { view: '₹500 or lower', value: 500 },
    { view: '₹400 or lower', value: 400 },
    { view: '₹300 or lower', value: 300 },
    { view: '₹200 or lower', value: 200 },
    { view: '₹100 or lower', value: 100 },
  ];
  ratingList: Array<any> = [
    { view: 5, value: 5 },
    { view: 4, value: 4 },
    { view: 3, value: 3 },
    { view: 2, value: 2 },
    { view: 1, value: 1 },
  ];
  discountPercent: Array<any> = [
    { view: '70% or more', value: 70 },
    { view: '60% or more', value: 60 },
    { view: '50% or more', value: 50 },
    { view: '40% or more', value: 40 },
    { view: '30% or more', value: 30 },
    { view: '20% or more', value: 20 },
    { view: '10% or more', value: 10 },
    { view: '0% or more', value: 0 },
  ];
  pageDetails: any = {};
  subCategoryMultiFilterCtrl: FormControl = new FormControl(null);
  brandMultiFilterCtrl: FormControl = new FormControl(null);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((routeParams: any) => {
      this.routeParams = routeParams;
    })
    this.initFormGroup();
    this.getProductDetails()
  }

  openCloseFilters() {
    this.isOpenFilers = !this.isOpenFilers;
  }

  initFormGroup() {
    this.formGroup = new FormGroup({
      searchStr: new FormControl(this.routeParams?.searchStr || null),
      category: new FormControl(this.routeParams?.category?.length ? [this.routeParams?.category] : []),
      subCategories: new FormControl([]),
      brands: new FormControl([]),
      sellingPrice: new FormControl(null),
      rating: new FormControl(null),
      discountPercent: new FormControl(null),
      itemsPerPage: new FormControl(10),
      currentPage: new FormControl(1),
    })
    this.formGroupValueChanges();
  }

  formGroupValueChanges() {
    this.formGroup.valueChanges.pipe(
      distinctUntilChanged((prev: any, next: any) => JSON.stringify(prev) === JSON.stringify(next))
    ).subscribe(() => {
      this.getProductDetails();
    });
  }

  getProductDetails() {
    this.homeService.getProductDetails(this.formGroup?.value).subscribe((res: any) => {
      if (res?.status == 200 && res?.success) {
        this.pageDetails = res?.data;
        this.subCategoryMultiFilterCtrlValueChanges();
        this.brandMultiFilterCtrlValueChanges();
      } else {
        this.alertMessageService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      this.alertMessageService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })
  }

  removeFilter(formControlName: string, i?: number) {
    if (i == undefined) {
      this.formGroup.get(formControlName)?.patchValue(null);
    } else {
      let formControlValue = this.formGroup.get(formControlName)?.value;
      formControlValue.splice(i, 1)
      this.formGroup.get(formControlName)?.patchValue(formControlValue);
    }
    this.formGroup.updateValueAndValidity();
    this.toggleSubCategories();
    this.toggleBrand();
  }

  clearFilter() {
    this.formGroup.reset();
    this.initFormGroup();
  }


  subCategoryMultiFilterCtrlValueChanges() {
    this.subCategoryMultiFilterCtrl.valueChanges
      .pipe(
        startWith(''),
        distinctUntilChanged((prev: any, next: any) => JSON.stringify(prev) === JSON.stringify(next))
      )
      .subscribe(() => {
        this.subCategoriesListOptions = this.subCategoryListFilter(this.subCategoryMultiFilterCtrl?.value);
      });
  }

  brandMultiFilterCtrlValueChanges() {
    this.brandMultiFilterCtrl.valueChanges
      .pipe(
        startWith(''),
        distinctUntilChanged((prev: any, next: any) => JSON.stringify(prev) === JSON.stringify(next))
      )
      .subscribe(() => {
        this.brandsListOptions = this.brandListFilter(this.brandMultiFilterCtrl?.value);
      });
  }

  subCategoryListFilter(value: string) {
    const filterValue: string = (value != null || value != undefined) ? value.toString().toLowerCase() : "";
    return this.pageDetails?.subCategories.filter((subcategory: any) => (subcategory).toLowerCase().includes(filterValue));

  }

  brandListFilter(value: string) {
    const filterValue: string = (value != null || value != undefined) ? value.toString().toLowerCase() : "";
    return this.pageDetails?.brands.filter((brand: any) => (brand).toLowerCase().includes(filterValue));
  }

  toggleAllSubCategories(event: boolean) {
    this.formGroup.get('subCategories')?.patchValue(event ? this.pageDetails.subCategories : []);
    this.toggleSubCategories();
  }

  toggleAllBrands(event: boolean) {
    this.formGroup.get('brands')?.patchValue(event ? this.pageDetails.brands : []);
    this.toggleBrand();
  }

  toggleSubCategories() {
    this.toggleAllSubcategoriesCheckboxState = JSON.stringify(this.subCategoriesListOptions) == JSON.stringify(this.formGroup.get('subCategories')?.value);
  }

  toggleBrand() {
    this.toggleAllBrandsCheckboxState = JSON.stringify(this.brandsListOptions) == JSON.stringify(this.formGroup.get('brands')?.value);
  }

  search(event: any) {
    this.formGroup.get('currentPage')?.patchValue(event);
  }

  addItemsToCart(item: any) {

  }

  viewItemDetail(item: any) {
    this.router.navigate([`view-item/${item?._id}`]);
  }

}
