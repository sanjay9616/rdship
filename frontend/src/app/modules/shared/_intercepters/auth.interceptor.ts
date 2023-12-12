import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, } from "@angular/common/http";
import { AuthService } from "../../auth/services/auth.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url) {
      let reqHeader: HttpRequest<any>;
        reqHeader = req.clone({
          headers: req.headers
            .append(AuthService.AUTH_TOKEN, 'auth-token')
        });
      return next.handle(reqHeader);
    } else {
      return next.handle(req);
    }
  }
}