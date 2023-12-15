import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/_services/api.service";
import { environment as env, environment } from "src/environments/environment";
import { URL_LIST } from "src/app/config/urlList";
import { ValidationService } from "../../shared/_services/validation.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static readonly USER_ID = '_id';
  static readonly AUTH_TOKEN = '_id';
  userDetail: any = {};
  isAuthenticated: boolean = false;

  constructor(private apiService: ApiService,
  ) { }

  setUserId(USER_ID: string) {
    localStorage.setItem(AuthService.AUTH_TOKEN, USER_ID);
  }

  getUserId() {
    return localStorage.getItem(AuthService.USER_ID) || '';
  }

  removeUserId() {
    localStorage.removeItem(AuthService.USER_ID);
  }

  setUserDetail(user: any) {
    this.userDetail = user;
  }

  getUserDetail() {
    return this.userDetail;
  }

  getCartItems() {
    return this.userDetail.cartItems;
  }

  setCartItems(items: Array<any>) {
    this.userDetail.cartItems = items;
  }

  getFevoriteItems() {
    return this.userDetail.wishList;
  }

  setFevoriteItems(items: Array<any>) {
    this.userDetail.wishList = items;
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

  addIsFavoriteAndIsCartItemsKey(items: Array<any>) {
    let cartItemsIds = this.userDetail?.cartItems.map((item: any) => item?._id);
    let wishListIds = this.userDetail?.wishList.map((item: any) => item?._id);
    items.forEach((item: any) => {
      item.isFavorite = wishListIds.includes(item._id);
      item.isCart = cartItemsIds.includes(item._id);
    })
    return items;
  }

  addIsFavoriteAndIsCartItemKey(item: any) {
    let cartItemsIds = this.userDetail?.cartItems.map((item: any) => item?._id);
    let wishListIds = this.userDetail?.wishList.map((item: any) => item?._id);
    item.isFavorite = wishListIds.includes(item._id);
    item.isCart = cartItemsIds.includes(item._id);
    return item;
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

  updateProfile(id: string, data: any) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.ACCOUNT.UPDATE_PROFILE.URL}/${id}`;
    return this.apiService.post(url, data);
  }

  getAuthData(id: any) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.ACCOUNT.AUTH_DATA.URL}/${id}`;
    return this.apiService.get(url);
  }
}