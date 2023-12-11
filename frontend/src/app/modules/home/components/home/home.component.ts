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
  recentlyViewedProducts: Array<any> = [];
  topSellingProducts: Array<any> = [];


  constructor(private router: Router,
    private location: Location,
    private commonService: CommonService,
    private alertMessageService: AlertMessageService,
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  viewOffer() {
    console.log(this.slider);
  }

  addItemsToCart(item: any) {
    event?.stopPropagation();

  }

}
