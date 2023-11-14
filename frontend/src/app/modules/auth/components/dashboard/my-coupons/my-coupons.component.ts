import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.scss']
})
export class MyCouponsComponent {

  constructor(private commonService: CommonService,
    private router: Router) {

  }

  couponList: Array<any> = this.commonService.items.slice(0, 3);

  ngOnInit(): void {}

  home() {
    this.router.navigate(['/']);
  }

}
