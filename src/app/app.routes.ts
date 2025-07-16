import { Routes } from '@angular/router';
import { PartyDetailsComponent } from './pages/party-details/party-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SmartConnectComponent } from './pages/smart-connect/smart-connect.component';
import { AddPartyComponent } from './pages/add-party/add-party.component';
import { ItemsComponent } from './pages/items/items.component';
import { SaleInviocesComponent } from './pages/sale-invioces/sale-invioces.component';
import { PaymentInComponent } from './pages/payment-in/payment-in.component';
import { SaleOrderComponent } from './pages/sale-order/sale-order.component';
import { PurchaseBillsComponent } from './pages/purchase-bills/purchase-bills.component';
import { PaymentOutComponent } from './pages/payment-out/payment-out.component';
import { WhatsappMarketingComponent } from './pages/whatsapp/whatsapp.component';
import { BankAccountComponent } from './pages/bank-ac/bank-ac.component';
import { CashInHandComponent } from './pages/cash-in-hand/cash-in-hand.component';
import { PurchaseComponent } from './pages/reports/purchase/purchase.component';
import { ProfitLossComponent } from './pages/reports/profit-loss/profit-loss.component';;
import { StockSummaryComponent } from './pages/reports/stock-summary/stock-summary.component';
import { PartyStatementComponent } from './pages/reports/party-statement/party-statement.component';
import { PlansComponent } from './pages/plans/plans.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SaleComponent } from './pages/reports/sale/sale.component';
import { SyncShareComponent } from './pages/share/share.component';
import { AddSaleComponent } from './pages/add-sale/add-sale.component';
import { AddPuachaseComponent } from './pages/add-purchase/add-purchase.component';
import { UserActivityTableComponent } from './pages/user-activity/user-activity.component';
import { DayBookComponent } from './pages/reports/daybook/daybook.component';
import { AllTransactionComponent } from './pages/reports/all-transactions/all-transactions.component';
import { AllPartiesComponent } from './pages/reports/allparties/allparties.component';
import { TrialBalanceReportComponent } from './pages/reports/taial-balance-report/taial-balance-report.component';
import { SettingComponent } from './pages/settings/settings.component';





export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'party-details', component: PartyDetailsComponent },
  { path: 'smart-connect', component: SmartConnectComponent },
  { path: 'add-party', component: AddPartyComponent },
  { path: 'item', component: ItemsComponent },
  { path: 'sale-invoices', component: SaleInviocesComponent },
  { path: 'payment-in', component: PaymentInComponent },
  { path: 'sale-order', component: SaleOrderComponent },
  { path: 'purchase-bills', component: PurchaseBillsComponent },
  { path: 'payment-out', component: PaymentOutComponent },
  { path: 'whatsapp', component: WhatsappMarketingComponent },
  { path: 'bank-ac', component: BankAccountComponent },
  { path: 'cash-in-hand', component: CashInHandComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'Purchase', component: PurchaseComponent },
  { path: 'profit-loss', component: ProfitLossComponent },
  { path: 'stock-summary', component: StockSummaryComponent },
  { path: 'party-statement', component: PartyStatementComponent },
  { path: 'plan', component: PlansComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'share', component: SyncShareComponent },
  { path: 'add-sale', component: AddSaleComponent },
  { path: 'add-purchase', component: AddPuachaseComponent },
  { path: 'user-activity', component: UserActivityTableComponent },
  { path: 'day-book', component: DayBookComponent },
  { path: 'all-transactions', component: AllTransactionComponent },
  { path: 'all-parties', component: AllPartiesComponent },
  {path: 'Taial-Balance-report', component:TrialBalanceReportComponent }, 
  {path:'setting',component:SettingComponent}


];
