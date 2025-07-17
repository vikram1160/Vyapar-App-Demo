import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-sale-invioces',
  standalone: true,
  imports: [DropdownModule, FormsModule, CalendarModule, TableModule, DatePipe, CommonModule],
  templateUrl: './sale-invioces.component.html',
  styleUrl: './sale-invioces.component.css'
})
export class SaleInviocesComponent implements OnInit {

  id: number | undefined;
  date: Date = new Date();
  invoice_no: string | undefined;
  party_name: string | undefined;
  transactoins_type: string | undefined;
  payment_type: string | undefined;
  amount: string | undefined;
  balance_due: string | undefined;

  products = [
    {
      id: 1,
      date: new Date("Sun Apr 20 2025 05:30:00 GMT+0530"),
      invoice_no: "1",
      party_name: "Mobail",
      transactoins_type: "1",
      payment_type: "8999",
     discount: 599,
      balance_due: "8400",
       
    },
    {
      id: 2,
      date: new Date("Sun Apr 20 2025 05:30:00 GMT+0530"),
      invoice_no: "23",
      party_name: "Laptop",
      transactoins_type: "2 ",
      payment_type: "12999",
       discount: 999,
      balance_due: "24000",
     
    }
       
  ];

  cities: City[] = [];
  selectedCity: City | undefined;

  ities: City[] = [];
  selecteCity: City | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cities = [
      { name: 'This Month', code: 'NY' },
      { name: 'Last Month', code: 'RM' },
      { name: 'This Quarter', code: 'LDN' },
      { name: 'This Year', code: 'IST' },
      { name: 'Custom', code: 'PRS' }
    ];

    this.ities = [
      { name: 'All Firms', code: 'NY' },
      { name: 'Laptop Hub', code: 'RM' },
    ];

    this.route.queryParams.subscribe(params => {
      const id = this.products.length + 1;
      const invoice_no = params['invoice_no'];
      const invoice_date = params['invoice_date'];
      const party_name = params['party_Name'];
      const transactions_type = params['transactions_type'];
      const payment_type = params['payment_type'];
      const amount = params['amount'];
      const balance_due = params['balance_due'];
      const discount = params['discount'];
      if (invoice_no && invoice_date) {
        let newProduct = {
          id,
          date: new Date(invoice_date),
          invoice_no: String(invoice_no),
          party_name: String(party_name || ''),
          transactoins_type: String(transactions_type || ''),
          payment_type: String(payment_type || ''),
          amount: String(amount || ''),
          balance_due: String(balance_due || ''),
          discount: Number(discount|| '')
        };
        this.products.push(newProduct);
      }
    });
  }
}