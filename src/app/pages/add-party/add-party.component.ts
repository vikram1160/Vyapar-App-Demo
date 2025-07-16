import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-party',
  standalone: true,
  imports: [TabsModule,CommonModule,TabViewModule,DropdownModule,InputTextModule,ButtonModule,ReactiveFormsModule, FormsModule,CalendarModule,],
  templateUrl: './add-party.component.html',
  styleUrl: './add-party.component.css'
})
export class AddPartyComponent {
  partyForm: FormGroup;
  showShipping = false;

  openingBalance: string = '';
asOfDate: Date = new Date();

navigateWithData() {
  this.router.navigate(['/party-details'], {
    queryParams: {
       party: this.partyName,
       amount: this.openingBalance ? parseFloat(this.openingBalance) : 0,
    
    }
  });
}

gstTypes = [
  { label: 'Unregistered/Consumer', value: 'unregistered' },
  { label: 'Registered Business - Regular', value: 'regular' },
  { label: 'Registered Business - Composition', value: 'composition' },
  { label: 'Casual Taxable Person', value: 'casual' },
  { label: 'Non-Resident Taxable Person', value: 'nonresident' },
  { label: 'Input Service Distributor (ISD)', value: 'isd' },
  { label: 'E-Commerce Operator', value: 'ecommerce' },
  { label: 'TDS Deductor', value: 'tds' },
  { label: 'TCS Collector', value: 'tcs' }
];

 states = [
  { label: 'Andhra Pradesh', value: 'AP' },
  { label: 'Arunachal Pradesh', value: 'AR' },
  { label: 'Assam', value: 'AS' },
  { label: 'Bihar', value: 'BR' },
  { label: 'Chhattisgarh', value: 'CG' },
  { label: 'Goa', value: 'GA' },
  { label: 'Gujarat', value: 'GJ' },
  { label: 'Haryana', value: 'HR' },
  { label: 'Himachal Pradesh', value: 'HP' },
  { label: 'Jharkhand', value: 'JH' },
  { label: 'Karnataka', value: 'KA' },
  { label: 'Kerala', value: 'KL' },
  { label: 'Madhya Pradesh', value: 'MP' },
  { label: 'Maharashtra', value: 'MH' },
  { label: 'Manipur', value: 'MN' },
  { label: 'Meghalaya', value: 'ML' },
  { label: 'Mizoram', value: 'MZ' },
  { label: 'Nagaland', value: 'NL' },
  { label: 'Odisha', value: 'OR' },
  { label: 'Punjab', value: 'PB' },
  { label: 'Rajasthan', value: 'RJ' },
  { label: 'Sikkim', value: 'SK' },
  { label: 'Tamil Nadu', value: 'TN' },
  { label: 'Telangana', value: 'TG' },
  { label: 'Tripura', value: 'TR' },
  { label: 'Uttar Pradesh', value: 'UP' },
  { label: 'Uttarakhand', value: 'UK' },
  { label: 'West Bengal', value: 'WB' }
];
partyName: any;



  constructor(private fb: FormBuilder,private router: Router) {
    this.partyForm = this.fb.group({
      partyName: [''],
      gstin: [''],
      phone: [''],
      gstType: [''],
      state: [''],
      email: [''],
      billingAddress: [''],
      shippingAddress: ['']
    });
  }

  toggleShipping() {
    this.showShipping = !this.showShipping;
  }

  save(addNew: boolean) {
    console.log(this.partyForm.value);
    if (addNew) {
      this.partyForm.reset();
    }
  }
}