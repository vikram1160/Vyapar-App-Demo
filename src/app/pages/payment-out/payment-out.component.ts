import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { TableModule } from 'primeng/table';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-payment-out',
  standalone: true,
  imports: [SelectModule,FormsModule,DatePickerModule,TableModule],
  templateUrl: './payment-out.component.html',
  styleUrl: './payment-out.component.css'
})
export class PaymentOutComponent {
  cities: City[] | undefined;

  selectedCity: City | undefined;

   
  ities: City[] | undefined;

  selecteCity: City | undefined;

  payment: City[] | undefined;

  payment_in: City | undefined;


  products = [
    { id: 1, date: "20/04/2025", invoice_no: "1", party_name : 'laptop shop',transactoins_type:'sale ',payment_type:'cash',amount:'1200',balance_due:'1200'},
    { id: 2, date: "23/04/2025", invoice_no: "4", party_name : 'mobail shop',transactoins_type:'sale ',payment_type:'online',amount:'1700',balance_due:'1700'},
   
  ]
  
  ngOnInit() {
    this.cities = [
        { name: 'This Month', code: 'NY' },
        { name: 'Last Month', code: 'RM' },
        { name: 'This Quarter', code: 'LDN' },
        { name: 'THis Year', code: 'IST' },
        { name: 'Custom', code: 'PRS' }
    ];

    this.ities = [
      { name: 'All Firms', code: 'NY' },
      { name: 'Laptop Hub', code: 'RM' },
    
  ];
  this.payment = [
    { name: 'All Transaction', code: 'NY' },
    { name: 'Sale', code: 'RM' },
    { name: 'Purchase', code: 'RM' },
    { name: 'Payment-Out', code: 'RM' },
    { name: 'Sale Order', code: 'RM' },
    { name: 'Sale', code: 'RM' },
  
];
}


date: Date = new Date()
}