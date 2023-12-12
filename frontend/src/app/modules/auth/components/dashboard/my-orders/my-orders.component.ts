import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { URL_LIST } from 'src/app/config/urlList';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  constructor(private commonService: CommonService,
    private router: Router
  ) { }

  orderList: Array<any> = this.commonService.items.slice(0, 2);
  isOpenFilter: boolean = false;
  statusList: Array<any> = [
    { view: 'On the way', value: 'On the way' },
    { view: 'Delivered', value: 'Delivered' },
    { view: 'Cancelled', value: 'Cancelled' },
    { view: 'Returned', value: 'Returned' },
  ]


  ngOnInit(): void {
  }

  home() {
    this.router.navigate([URL_LIST.ROUTING_PATHS.HOME]);
  }

  toggleFilter() {
    this.isOpenFilter = !this.isOpenFilter;
  }

}
