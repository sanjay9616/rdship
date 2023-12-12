import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MESSAGES } from 'src/app/config/message';
import { URL_LIST } from 'src/app/config/urlList';
import { AlertMessageService } from 'src/app/modules/shared/_services/alert-message.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private authService: AuthService,
    private alertService: AlertMessageService,
    private router: Router
  ) { }

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  displayedColumns: Array<string> = ['serialNumber', 'area', 'city', 'pinCode', 'actions'];
  formGroup!: FormGroup;
  userInfo: any = this.authService.getUserDetail();

  ngOnInit(): void {
    this.initFormGroup();
    this.setFormGroup();
  }

  initFormGroup() {
    this.formGroup = new FormGroup({
      name: new FormControl(null),
      gender: new FormControl(null),
      email: new FormControl(null),
      mobileNo: new FormControl(null),
      address: new FormArray([])
    })
  }

  getAddressFormControls(): FormGroup {
    let address: FormGroup = new FormGroup({
      area: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      pinCode: new FormControl(null, Validators.required)
    });
    return address;
  }

  get getAddessFromArray(): FormArray {
    return this.formGroup.get('address') as FormArray;
  }

  setFormGroup() {
    this.initFormGroup();
    this.formGroup.patchValue(this.userInfo);
    for (let i = 0; i < this.userInfo.address.length; i++) {
      let address: FormGroup = this.getAddressFormControls();
      address.patchValue(this.userInfo.address[i]);
      this.getAddessFromArray.push(address);
    }
    this.dataSource = new MatTableDataSource(this.getAddessFromArray.controls);
    this.formGroup.disable();
    this.formGroup.updateValueAndValidity();
  }

  addDeliveryAddress() {
    let address: FormGroup = this.getAddressFormControls();
    this.getAddessFromArray.push(address);
    this.dataSource = new MatTableDataSource(this.getAddessFromArray.controls);
  }

  removeDeliveryAddress(i: number) {
    this.getAddessFromArray.removeAt(i);
    this.saveUserInfo({ address: this.formGroup.get('address')?.getRawValue() });
    this.setFormGroup();
  }

  savePersonalInfo() {
    this.disablePersonalInfoCard();
    this.getAddessFromArray.updateValueAndValidity();
    let formGroupValue: any = { ...this.formGroup.getRawValue() };
    let payload: any = {
      name: formGroupValue.name || null,
      gender: formGroupValue.gender || null,
      email: formGroupValue.email || null,
      mobileNo: formGroupValue.mobileNo || null
    }
    this.saveUserInfo(payload);
  }

  saveDeliveryAddress() {
    this.getAddessFromArray.disable();
    this.getAddessFromArray.updateValueAndValidity();
    let payload: any = {}
    payload.address = this.formGroup.get('address')?.getRawValue();
    this.saveUserInfo(payload);
  }

  saveUserInfo(payload: any) {
    this.authService.updateProfile(this.userInfo._id, payload).subscribe((res: any) => {
      if (res?.status == 200 && res?.success) {
        this.authService.setUserDetail(res?.data);
        this.userInfo = this.authService.getUserDetail();
        this.authService.setIsAuthenticated(true);
        this.setFormGroup();
        this.alertService.addSuccess(MESSAGES.SUCCESS.PROFILE_UPDATED).show();
      } else {
        this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    }, (err: any) => {
      if (err?.error?.status == 409 && !err?.error?.success) {
        this.alertService.addError(MESSAGES.ERROR.ENTER_NEW_DETAILS).show();
      } else {
        this.alertService.addError(MESSAGES.ERROR.SOMETHING_WENT_WRONG).show();
      }
    })
  }

  editPersonalInfo() {
    this.enablePersonalInfoCard();
  }

  editDeliverAddress() {
    this.getAddessFromArray.enable();
  }

  disablePersonalInfoCard() {
    this.formGroup.get('name')?.disable();
    this.formGroup.get('gender')?.disable();
    this.formGroup.get('email')?.disable();
    this.formGroup.get('mobileNo')?.disable();
    this.formGroup.updateValueAndValidity();
  }

  enablePersonalInfoCard() {
    this.formGroup.get('name')?.enable();
    this.formGroup.get('gender')?.enable();
    this.formGroup.get('email')?.enable();
    this.formGroup.get('mobileNo')?.enable();
    this.formGroup.updateValueAndValidity();
  }

  get getIsDiblePersonalInfoCard() {
    return this.formGroup.get('name')?.disabled && this.formGroup.get('gender')?.disabled && this.formGroup.get('email')?.disabled && this.formGroup.get('mobileNo')?.disabled
  }

  verifyUserInfo() {
    this.router.navigate([URL_LIST.ROUTING_PATHS.VERIFY_USER])
  }
}
