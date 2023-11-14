import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, } from "rxjs";
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(url: string, options?: any): Observable<any> {
    return this.http
      .get(this.createUrl(url), options)
      .pipe(tap(this.handleSuccess, this.handleError));
  }

  public post(url: string, data: any, options?: any): Observable<any> {
    return this.http
      .post(this.createUrl(url), data, options)
      .pipe(tap(this.handleSuccess, this.handleError));
  }

  public put(url: string, data: any): Observable<any> {
    return this.http
      .put(this.createUrl(url), data)
      .pipe(tap(this.handleSuccess, this.handleError));
  }

  public delete(url: string) {
    return this.http
      .delete(this.createUrl(url))
      .pipe(tap(this.handleSuccess, this.handleError));
  }

  public httprequest(url: string, formData: any, options?: any) {
    const header = new HttpHeaders({ upload: 'true' });
    const req = new HttpRequest('POST', this.createUrl(url), formData, {
      headers: header,
      reportProgress: true
    });
    return this.http
      .request(req)
      .pipe(tap(this.handleSuccess, this.handleError));
  }

  private createUrl(url: string): string {
    return url;
  }

  private handleSuccess(result: any) {
    return result;
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}