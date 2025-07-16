import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [Dialog,ButtonModule,FormsModule,CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {


selectedDuration: string = '1 Year';
silverPrice: number = 3999;
GoldPrice: number = 5999;

selectDuration(duration: string): void {
  this.selectedDuration = duration;

  if (duration === '1 Year') {
    this.silverPrice = 3999;
    this.GoldPrice = 5999;
  } else if (duration === '2 Years') {
    this.silverPrice = 6999;
    this.GoldPrice = 9999;
  }
}
  



  // silverPrice = 3999;

  // GoldPrice = 5999;
  
  visible: boolean = false;

  showDialog() {
      this.visible = true;
      
  }

  originalPrice = 8299;
  discountedPrice = 4299;
  discountPercentage = 48;

  couponCode = 'WIN60';
  couponDiscount = 0.10; // 10%
  couponApplied = true;

  useGstin = false;

  get discountAmount(): number {
    return this.discountedPrice * this.couponDiscount;
  }

  get finalAmount(): number {
    return this.discountedPrice - this.discountAmount;
  }

  removeCoupon() {
    this.couponApplied = false;
  }

 

  selectedPlan: string = '1 Year Plan';

  // selectDuration(duration: string) {
  //   this.selectedPlan = duration + ' Plan';
  //   console.log('Selected:', this.selectedPlan);
  // }


  changePriceForDevice(device: string) {
    if (device === 'Desktop') {
      this.silverPrice = 2999;
    } else if (device === 'Mobile') {
      this.silverPrice = 1999;
    } else {
      this.silverPrice = 3999;
    }
    if(device === 'Desktop'){
      this.GoldPrice = 3999
    }else if (device === 'Mobile') {
      this.GoldPrice = 2999;
    }else {
      this.GoldPrice = 4999;
    }

  }
}