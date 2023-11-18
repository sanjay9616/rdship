import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/_services/api.service";
import { environment as env, environment } from "src/environments/environment";
import { URL_LIST } from "src/app/config/urlList";
import { ValidationService } from "../../shared/_services/validation.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static readonly USER_ID = 'token';
  static readonly AUTH_TOKEN = 'token';
  static readonly SALESOPS_TOKEN = 'Authorization';
  static readonly AUTHORIZATION_TOKEN = 'Authorization';
  static readonly AUTH_USER_ID = 'idUser';
  static readonly AUTH_BRANCH_ID = 'idBranch';
  static readonly AUTH_COMPANY_ID = 'idCompany';
  static readonly AUTH_APPLICATION_ID = 'application';
  static readonly APPLICATION = 'source';
  static readonly FINANCE_ACCESS = 'FA';
  userDetail: any = {};
  isAuthenticated: boolean = false;
  constructor(private apiService: ApiService,
    private validationService: ValidationService) { }

  setToken(USER_ID: string) {
    localStorage.setItem(AuthService.AUTH_TOKEN, USER_ID);
  }

  demoApi() {
    let url = 'http://localhost:3000/books'
    return this.apiService.get(url)
  }

  getgetToken() {
    return localStorage.getItem(AuthService.AUTH_TOKEN);

  }

  clearToken() {
    localStorage.removeItem(AuthService.AUTH_TOKEN);
  }

  setUserDetail(user: any) {
    this.isAuthenticated = true;
    this.userDetail = user;
  }

  getUserDetail() {
    return this.userDetail;
  }

  clearUserDetail() {
    this.userDetail = {};
    this.isAuthenticated = false;
  }

  setIsAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  login(data: any) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.ACCOUNT.LOGIN.URL}`;
    return this.apiService.post(url, data);
  }

  signUp(data: any) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.ACCOUNT.SIGNUP.URL}`;
    return this.apiService.post(url, data);
  }

  forgetPassword(data: any) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.ACCOUNT.FORGET_PASSWORD.URL}`;
    return this.apiService.patch(url, data);
  }

  verifyUser(data: any) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.ACCOUNT.VERIFY_USER.URL}`;
    return this.apiService.patch(url, data);
  }

  updateProfile(data: any) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.ACCOUNT.UPDATE_PROFILE.URL}`;
    return this.apiService.post(url, data);
  }
}