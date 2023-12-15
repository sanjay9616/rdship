import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { URL_LIST } from 'src/app/config/urlList';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.scss']
})
export class MyCouponsComponent {

  couponList: Array<any> = this.commonService.items.slice(0, 3);

  constructor(private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  home() {
    this.router.navigate([URL_LIST.ROUTING_PATHS.HOME]);
  }

}
