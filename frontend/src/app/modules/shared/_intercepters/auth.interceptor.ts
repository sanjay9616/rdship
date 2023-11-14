import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, } from "@angular/common/http";
import { AuthService } from "../../auth/_services/auth.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private application: string = "EOC";

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url) {
      let reqHeader: HttpRequest<any>;
        reqHeader = req.clone({
          headers: req.headers
            .append(AuthService.AUTH_TOKEN, 'auth-token')
            .append(AuthService.AUTHORIZATION_TOKEN, 'Bearer {'+ 'yuhnbnbyu' +'}')
            .append(AuthService.AUTH_USER_ID, 'auth-userid')
            .append(AuthService.AUTH_BRANCH_ID, 'auth-branchid')
            .append(AuthService.AUTH_COMPANY_ID, 'auth-companyid')
            .append(AuthService.AUTH_APPLICATION_ID, 'auth-application-id')
            .append(AuthService.APPLICATION, 'application')
            .append('Content-Type', 'application/json')
        });
      return next.handle(reqHeader);
    } else {
      return next.handle(req);
    }
  }
}