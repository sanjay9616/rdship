import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  userDetail: any = {};
  isAuthenticated: boolean = false;
  formGroup!: FormGroup;

  ngOnInit(): void {
    this.userDetail = this.authService.getUserDetail();
    this.isAuthenticated = this.authService.isAuthenticated;
    this.initFormGroup();
    this.formGroupDataSetter();
  }

  initFormGroup() {
    this.formGroup = new FormGroup({
      name: new FormControl(null),
      mobileNumber: new FormControl(null),
      gender: new FormControl(null),
      email: new FormControl(null),
      isVerified: new FormControl(false),
      address: new FormArray([])
    })
  }

  formGroupDataSetter() {
    this.formGroup.patchValue(this.userDetail);
    for (let i = 0; i < this.userDetail.address.length; i++) {
      this.addAddress();
      this.getAddressFormGroupAtIndex(i).patchValue(this.userDetail.address[i]);
      this.getAddressFormGroupAtIndex(i).disable();
    }
  }

  addAddress() {
    this.getAddressFormArray.push(
      new FormGroup({
      area: new FormControl(null),
      city: new FormControl(null),
      pincode: new FormControl(null),
      })
    )
  }

  deleteAddress(i: number) {
    this.getAddressFormArray.removeAt(i);
  }

  get getAddressFormArray(): FormArray {
    return this.formGroup.get('address') as FormArray;
  }

  getAddressFormGroupAtIndex(i: number) {
    return this.getAddressFormArray.at(i) as FormGroup;
  }
}
