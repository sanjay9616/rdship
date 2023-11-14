import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.scss']
})
export class AllNotificationsComponent {

  constructor(private commonService: CommonService,
    private router: Router) {

  }

  notificationList: Array<any> = this.commonService.items.slice(0, 3);

  ngOnInit(): void {}

  home() {
    this.router.navigate(['/']);
  }

}
