import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/common.service';
import { MESSAGES } from 'src/app/config/message';
import { AuthService } from '../../auth/services/auth.service';
import { AlertMessageService } from '../_services/alert-message.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private commonSevice: CommonService,
    private authService: AuthService,
    private alertService: AlertMessageService) { }

  canActivate(): Observable<boolean> | boolean {
    const id = localStorage.getItem('_id')
    if(id) this.getAuthData();
    return true
  }

  getAuthData() {
    this.authService.getAuthData(localStorage.getItem('_id')).subscribe((res) => {
      if(res?.status == 200 && res?.success) {
        this.authService.setUserDetail(res.data);
        this.authService.setIsAuthenticated(true);
      }
    }, (err: any) => {
      this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
    })
  }
}
