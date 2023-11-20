import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';
import { URL_LIST } from 'src/app/config/urlList';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private commonSevice: CommonService,
    private activatedRoute: ActivatedRoute,
    private alertMessageService: AlertMessageService,
    private commonService: CommonService,
    private router: Router) { }

  filters: any = {
    searchStr: null,
    category: null,
    subCategories: [],
    brands: [],
    customerRatings: [],
    itemsPerPage: 8,
    currentPage: 1,
  }
  customerRatings: Array<any> = [
    { value: 4, checked: false },
    { value: 3, checked: false },
    { value: 2, checked: false },
    { value: 1, checked: false },
  ]
  pageDetails: any = {};
  allSubCategories: Array<any> = [];
  allBrands: Array<any> = [];
  allSubCategoriesOptions: Array<any> = [];
  allBrandsOptions: Array<any> = [];
  categoryFilterCtrl = new FormControl('');
  brandFilterCtrl = new FormControl('');

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((routeParams: any) => {
      this.filters.searchStr = routeParams.searchStr || null;
      this.filters.category = routeParams.category || null;
      this.allSubCategories = this.commonSevice.getSubcategoriesByCategory(this.filters.category).map((item: any) => ({item, checked: false}));
      this.allSubCategoriesOptions = this.commonSevice.getSubcategoriesByCategory(this.filters.category).map((item: any) => ({item, checked: false}));
      this.allBrands = this.commonSevice.getAllBrandByCategory(this.filters.category).map((item: any) => ({item, checked: false}));
      this.allBrandsOptions = this.commonSevice.getAllBrandByCategory(this.filters.category).map((item: any) => ({item, checked: false}));
      this.getPageDetails(this.filters);
      this.filterCategoryOptionMulti();
      this.filterBrandOptionMulti();
    })
  }

  filterCategoryOptionMulti() {
    this.categoryFilterCtrl.valueChanges
      .pipe(
        startWith(''),
        map((value: any) => this.filterCategoryOptions(value)),
      ).subscribe();
  }

  filterCategoryOptions(value: string) {
    const filterValue: string = (value != null || value != undefined) ? value.toString().toLowerCase() : "";
    this.allSubCategoriesOptions = this.allSubCategories.filter((category: any) => (category.item.toLowerCase()).includes(filterValue)).map((category: any) => ({item: category.item, checked: (this.filters.subCategories.includes(category.item) ? true : false)}));
  }

  markUnmarkSubCategory(event: any, category: string, i: number) {
    this.filters.currentPage = 1;
    if(event.checked && !this.filters.subCategories.includes(category)) {
      this.filters.subCategories.push(category);
    } else if(!event.checked && this.filters.subCategories.includes(category)) {
        const index = this.filters.subCategories.indexOf(category);
        if(index > -1) {
          this.filters.subCategories.splice(index, 1);
        }
    }
    this.allSubCategoriesOptions[i].checked = event.checked;
    this.getPageDetails(this.filters);
  }

  removeSubCategoryFilter(subCategory: string) {
    const indexInFilter = this.filters.subCategories.indexOf(subCategory);
    if(indexInFilter > -1) {
      this.filters.subCategories.splice(indexInFilter, 1);
    }
    this.allSubCategoriesOptions = this.allSubCategoriesOptions.map((item: any) => ({item: item.item, checked: (item.item === subCategory ? false : item.checked)}));
    this.getPageDetails(this.filters);
  }

  filterBrandOptionMulti() {
    this.brandFilterCtrl.valueChanges
      .pipe(
        startWith(''),
        map((value: any) => this.filterbrandOptions(value)),
      ).subscribe();
  }

  filterbrandOptions(value: string) {
    const filterValue: string = (value != null || value != undefined) ? value.toString().toLowerCase() : "";
    this.allBrandsOptions = this.allBrands.filter((brand: any) => (brand.item.toLowerCase()).includes(filterValue)).map((brand: any) => ({item: brand.item, checked: (this.filters.brands.includes(brand.item) ? true : false)}));
  }

  markUnmarkBrand(event: any, brand: string, i: number) {
    this.filters.currentPage = 1;
    if(event.checked && !this.filters.brands.includes(brand)) {
      this.filters.brands.push(brand);
    } else if(!event.checked && this.filters.brands.includes(brand)) {
        const index = this.filters.brands.indexOf(brand);
        if(index > -1) {
          this.filters.brands.splice(index, 1);
        }
    }
    this.allBrandsOptions[i].checked = event.checked;
    this.getPageDetails(this.filters);
  }

  removeBrandFilter(brand: string) {
    const indexInFilter = this.filters.brands.indexOf(brand);
    if(indexInFilter > -1) {
      this.filters.brands.splice(indexInFilter, 1);
    }
    this.allBrandsOptions = this.allBrandsOptions.map((item: any) => ({item: item.item, checked: (item.item === brand ? false : item.checked)}));
    this.getPageDetails(this.filters);
  }

  getPageDetails(filters: any) {
    this.pageDetails = this.commonSevice.getItemsByFilters(filters);
  }

  clearAll() {
    this.filters = {
      searchStr: this.activatedRoute.snapshot.params.searchStr,
      category: this.activatedRoute.snapshot.params.category,
      subCategories: [],
      brands: [],
      customerRatings: [],
      itemsPerPage: 8,
      currentPage: 1,
    };
    this.allSubCategoriesOptions = this.allSubCategoriesOptions.map((item: any) => ({item: item.item, checked: false}));
    this.allBrandsOptions = this.allBrandsOptions.map((item: any) => ({item: item.item, checked: false}));
    this.customerRatings = this.customerRatings.map((item: any) => ({value: item.value, checked: false}));
    this.getPageDetails(this.filters);
  }

  markUnmarkCustomerRating(event: any, i: number) {
    this.filters.currentPage = 1;
    this.customerRatings[i].checked = event.checked;
    this.filters.customerRatings = this.customerRatings.filter((rating: any) => rating.checked).map((rating: any) => rating.value);
    this.getPageDetails(this.filters);
  }

  removeCustomerRatingFilter(rating: string) {
    const index = this.filters.customerRatings.indexOf(rating);
    if (index > -1) {
      this.filters.customerRatings.splice(index, 1);
    }
    this.customerRatings.map((item: any) => {
      if(item.value === rating) {
        item.checked = false;
      }
    });
    this.getPageDetails(this.filters);
  }

  viewItemDetail(item: any) {
    this.router.navigate([`category/${item.category}/subCategory/${item.subCategory}/itemId/${item.itemId}`]);
  }

  search(event: any) {
    this.filters.currentPage = event;
    this.getPageDetails(this.filters);
  }

  addItemsToCart(item: any) {
    event?.stopPropagation();
    let found: boolean = this.commonService.addItemsToCart(item);
    if(!found) {
      this.alertMessageService.addSuccess('Item added successfully').show();
      this.router.navigate([URL_LIST.ROUTING_PATHS.VIEW_CART]);
    } else {
      this.alertMessageService.addError('Item already added').show();
    }
  }

}
