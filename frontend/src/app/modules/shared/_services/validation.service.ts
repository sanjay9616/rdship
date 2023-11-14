import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class ValidationService {
    constructor() {}

    checkEmptyOrNull(value: any) {
        if(value === null || value === undefined || value === '') {
            return true;
        }
        return false;
    }

  }