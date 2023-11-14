import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  public static readonly TYPE_ERROR = 'alert-error';
  public static readonly TYPE_SUCCESS = 'alert-success';
  public static readonly TYPE_WARNING = 'alert-warning';

  messages: Array<any> = [];

  constructor() { }

  add(alertType: string, message: string) {
    this.messages.push({ type: alertType, message: message });
    return this;
  }

  addError(message: any) {
    this.messages.push({ type: AlertMessageService.TYPE_ERROR, message: message });
    return this;
  }

  addWarning(message: any) {
    this.messages.push({ type: AlertMessageService.TYPE_WARNING, message: message });
    return this;
  }

  addSuccess(message: string) {
    this.messages.push({ type: AlertMessageService.TYPE_SUCCESS, message: message });
    return this;
  }

  show() {
    let alertElement: any = document.getElementById('alert-message');
    let alertType: string;
    this.messages.forEach((element: any) => {
      alertElement.innerHTML = element.message;
      alertElement.className = element.type;
      alertType = element.type;
    });
    setTimeout(function () {
      alertElement.className = alertElement.className.replace(alertType, '');
    }, 3000);
  }
}
