import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-products',
  templateUrl: './rate-products.component.html',
  styleUrls: ['./rate-products.component.scss']
})
export class RateProductsComponent implements OnInit {

  rating: number = 0;
  ratingText: string = '';

  constructor() {}

  ngOnInit() {}

  selectRating(rating: number, ratingText: string) {
    this.rating = rating;
    this.ratingText = ratingText;
  }

}
