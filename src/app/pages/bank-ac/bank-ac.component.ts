import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputGroup, InputGroupModule,  } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bank-account',
  standalone: true,
  imports: [DialogModule,ButtonModule,InputGroupModule,FormsModule,InputTextModule,DatePickerModule,CommonModule],
  templateUrl: './bank-ac.component.html',
  styleUrl: './bank-ac.component.css'
})
export class BankAccountComponent {
  visible: boolean = false;
  value: string | undefined;
  Balance:string| undefined;

  date1: Date = new Date(); 

  showUPIDiv = false;


    showDialog() {
        this.visible = true;
    }
}