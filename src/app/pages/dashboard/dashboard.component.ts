import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart'
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule,FormsModule, CommonModule,SelectModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 data: any;
  options: any;
  formatted: any 

  constructor( private router: Router ) {
    const today = new Date();
    const daysToShow = 12;
    const labels: string[] = [];
    const data: number[] = [];
  
    for (let i = daysToShow - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
  
      const formatted = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
      labels.push(formatted);
  
      // Replace this with real revenue logic or API call
      data.push(this.getRandomRevenue()); 
    }
  
    this.data = {
      labels: labels,
      datasets: [
        {
          label: 'Revenue',
          data: data,
          borderColor: '#42A5F5',
          backgroundColor: 'rgba(87, 179, 253, 0.2)',
          fill: true,
          pointBackgroundColor: '#42A5F5',
          pointBorderColor: '#fff',
          pointHoverRadius: 6
        }
      ]
    };
  
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (tooltipItem: any) {
              const value = tooltipItem.raw;
              return `₹ ${value.toLocaleString('en-IN')}`; 
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 200
          }
        }
      }
    };
  }
  
  getRandomRevenue(): number {
    return Math.floor(Math.random() * 2000);
  }

  //   showReports = false;
  // showOther = false;

  // goReport() {
  //   this.showReports = true;
  //   this.showOther = true;
   
  // }

 

    goReport(){

     this.router.navigate(['/sale']);
    }

    goTransction(){
      this.router.navigate(['/all-transactions']);

    }
    goBookDayReport(){
      this.router.navigate(['profit-loss']); 
    }
    goPartyStatement(){
      this.router.navigate(['/party-statement']);
    }
      
}
