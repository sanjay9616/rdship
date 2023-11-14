import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private commonService: CommonService,
    private authService: AuthService) { }

    searchStr: FormControl = new FormControl(null);
    isAuthenticated: boolean = this.authService.isAuthenticated;
    user: any = this.authService.getUserDetail();
    cartItems: Array<any> = Object.keys(this.user).length ? this.user.cartItems : this.commonService.cartItems;

  ngOnInit(): void {
    console.log('getUserDetail - HeaderComponent', this.authService.getUserDetail());
  }

  search() {
    if(this.searchStr.value) this.router.navigate([`searchStr/${this.searchStr.value}`]);
    this.searchStr.reset();
  }

  logout() {
    this.authService.clearToken();
    this.authService.clearUserDetail();
    this.isAuthenticated = this.authService.isAuthenticated;
  }

}
