import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/common.service';
import { MESSAGES } from 'src/app/config/message';
import { URL_LIST } from 'src/app/config/urlList';
import { AuthService } from '../../auth/services/auth.service';
import { AlertMessageService } from '../_services/alert-message.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardAuthGuard implements CanActivate {

  id = localStorage?.getItem('_id');

  constructor(private commonSevice: CommonService,
    private router: Router,
    private alertService: AlertMessageService,
    private authService: AuthService) { }


  canActivate(): Observable<boolean> | boolean {
    let id = localStorage.getItem('_id');
    return new Observable<boolean>((observer: any) => {
      if (id) {
        if (this.authService.isAuthenticated) {
          observer.next(true);
          observer.complete()
        } else {
          this.authService.getAuthData(id).subscribe((res: any) => {
            if (res.status == 200 && res.success) {
              this.authService.setUserDetail(res.data);
              this.authService.setIsAuthenticated(true);
              observer.next(true);
              observer.complete()
            } else {
              this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
              observer.next(false)
              observer.complete()
            }
          }, (err: any) => {
            this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
            observer.next(false);
            observer.complete()
          })
        }
      } else {
        this.alertService.addError(MESSAGES.ERROR.LOGIN_FIRST).show();
        this.router.navigate([URL_LIST.ROUTING_PATHS.LOGIN]);
        observer.next(false);
        observer.complete();
      }
    })
  }
}
