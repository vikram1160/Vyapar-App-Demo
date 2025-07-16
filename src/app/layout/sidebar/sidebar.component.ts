import { Component, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SettingComponent } from '../../pages/settings/settings.component'

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, DrawerModule, SettingComponent,PanelMenuModule,],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false;

  @Output() collapseChanged = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapseChanged.emit(this.isCollapsed);
  }

  constructor(private router: Router) { }

  toggleSubmenu(item: any) {
    item.expanded = !item.expanded;
  }

  handleAction(item: any) {
    if (item.route) {
      this.router.navigate([`/${item.route}`]);
    }
  }

  hideReports(item: any) {
    if (item.route) {
      this.router.navigate([`/${item.route}`]);

    }
  }

  visible = false;

  openDrawer() {
    this.visible = true;
  }

  menu = [
    { label: 'Home', icon: 'pi pi-home', route: '/' },
    {
      label: 'Parties',
      icon: 'pi pi-users',
      expanded: false,
      children: [
        { label: 'Party Details', route: 'party-details' },
        { label: 'Smart Connect', route: 'smart-connect' }
      ]
    },
    { label: 'Items', icon: 'pi pi-shopping-bag', route: '/item' },
    {
      label: 'Sale',
      icon: 'pi pi-th-large',
      expanded: false,
      children: [
        { label: 'Sale Invoices', route: '/sale-invoices' },
        { label: 'Payment In', route: '/payment-in' },
        { label: 'Sale Order', route: '/sale-order' }
      ]
    },
    {
      label: 'Purchase',
      icon: 'pi pi-shopping-cart',
      expanded: false,
      children: [
        { label: 'Purchase Bills', route: '/purchase-bills' },
        { label: 'Payment Out', route: '/payment-out' }
      ]
    },
    {
      label: 'Whatsapp Marketing',
      icon: 'pi pi-chart-line',
      route: '/whatsapp'
    },
    {
      label: 'Cash & Bank',
      icon: 'pi pi-building-columns',
      expanded: false,
      children: [
        { label: 'Bank Accounts', route: '/bank-ac' },
        { label: 'Cash In Hand', route: '/cash-in-hand' }
      ]
    },

    {
      label: 'Sync Share',
      icon: 'pi pi-sync',
      route: '/share'
    },
    {
      label: 'Reports',
      icon: 'pi pi-chart-bar',
      action: '',
      expanded: false,
      children: [
        { label: 'Sale', route: '/sale' },
        { label: 'Purchase', route: '/Purchase' },
        { label: 'Day Book', route: '/day-book' },
        { label: 'All Transactions', route: '/all-transactions' },
        { label: 'Profit & Loss', route: '/profit-loss' },
        { label: 'Trial Balance Report', route: 'Taial-Balance-report' },
        { label: 'All Parties', route: '/all-parties' },
        { label: 'Stock Summary', route: '/stock-summary' },
        { label: 'Party Statement', route: '/party-statement' }

      ]
    },

     {
      label: 'Settings',
      icon: 'pi pi-cog',
      command: () => this.openDrawer() 
    },
    
    { label: 'Plans & Pricing', icon: 'pi pi-star', route: '/plan' },
    { label: 'Profile', icon: 'pi pi-user', route: '/profile' }
  ];
}
