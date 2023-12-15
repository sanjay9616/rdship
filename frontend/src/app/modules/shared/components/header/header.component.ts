import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  searchStr: FormControl = new FormControl(null);
  // cartItems: Array<any> = Object.keys(this.user).length ? this.user.cartItems : this.commonService.cartItems;

  constructor(private router: Router,
    private alertMessage: AlertMessageService,
    public authService: AuthService
  ) { }

  ngOnInit(): void { }

  search() {
    if (this.searchStr.value) this.router.navigate([`searchStr/${this.searchStr.value}`]);
    this.searchStr.reset();
  }

  logout() {
    this.authService.removeUserId();
    this.authService.clearUserDetail();
    this.authService.setIsAuthenticated(false);
    this.alertMessage.addSuccess(MESSAGES.SUCCESS.LOGOUT_SUCCESSFULL).show()
    this.router.navigate([URL_LIST.ROUTING_PATHS.HOME]);
  }

}
