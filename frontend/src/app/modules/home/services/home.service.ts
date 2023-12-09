import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/_services/api.service";
import { environment as env, environment } from "src/environments/environment";
import { URL_LIST } from "src/app/config/urlList";
import { ValidationService } from "../../shared/_services/validation.service";

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  userDetail: any = {};
  isAuthenticated: boolean = false;
  constructor(private apiService: ApiService,
    private validationService: ValidationService) { }

  getProductDetails(data: any) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.HOME.PRODUCT_DETAILS.URL}`;
    return this.apiService.post(url, data);
  }

  getItemInfo(id: string) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.HOME.ITEM_INFO.URL}/${id}`;
    return this.apiService.get(url);
  }

  addCartItem(id: string, data: any) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.CART_ITEMS.ADD_ITEM_TO_CART.URL}/${id}`;
    return this.apiService.post(url, data);
  }

  getCartItems(id: string) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.CART_ITEMS.GET_CART_ITEMS.URL}/${id}`;
    return this.apiService.get(url);
  }

  deleteCartItem(userId: string, itemId: string) {
    let url: string = `${env.rdShip.baseUrl}${URL_LIST.API.CART_ITEMS.DELETE_CART_ITEM.URL}/${userId}/${itemId}`;
    return this.apiService.delete(url);
  }

}