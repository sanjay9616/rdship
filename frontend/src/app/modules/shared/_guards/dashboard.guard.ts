import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/common.service';
import { AuthService } from '../../auth/_services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardAuthGuard implements CanActivate {

  constructor(private commonSevice: CommonService,
    private router: Router,
    private authService: AuthService) { }

  canActivate(): Observable<boolean> | boolean {
    console.log('DashboardAuthGuard');
    let token = localStorage.getItem(AuthService.AUTH_TOKEN);
    let res: any = this.commonSevice.getUserByToken(token);
    if(res?.status === 200 && res?.success) {
      this.authService.setUserDetail(res?.data);
      return true;
    }
    this.router.navigate(['/account/login']);
    return false;
  }
}
