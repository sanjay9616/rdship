import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { MESSAGES } from 'src/app/config/message';
import { URL_LIST } from 'src/app/config/urlList';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AlertMessageService } from '../../_services/alert-message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private commonService: CommonService,
    private alertMessage: AlertMessageService,
    public authService: AuthService) { }

    searchStr: FormControl = new FormControl(null);
    // cartItems: Array<any> = Object.keys(this.user).length ? this.user.cartItems : this.commonService.cartItems;

  ngOnInit(): void {}

  search() {
    if(this.searchStr.value) this.router.navigate([`searchStr/${this.searchStr.value}`]);
    this.searchStr.reset();
  }

  logout() {
    this.authService.clearId();
    this.authService.clearUserDetail();
    this.authService.setIsAuthenticated(false);
    this.alertMessage.addSuccess(MESSAGES.SUCCESS.LOGOUT_SUCCESSFULL).show()
    this.router.navigate([URL_LIST.ROUTING_PATHS.HOME]);
  }

}
