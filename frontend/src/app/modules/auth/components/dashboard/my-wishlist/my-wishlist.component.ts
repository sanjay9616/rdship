import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.scss']
})
export class MyWishlistComponent {
  constructor(private commonService: CommonService,
    private router: Router) {

  }

  wishList: Array<any> = this.commonService.items.slice(0, 2);

  ngOnInit(): void {}

  home() {
    this.router.navigate(['/']);
  }
}
