import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { DoubleEntryHomeComponent } from './double-entry-home/double-entry-home.component';
import { LoginComponent } from './login/login.component';
import { ReceiptSectionComponent } from './double-entry-home/receipt-section/receipt-section.component';

const routes: Routes = [
  {path: 'double-entry-home/receipt-section', component: ReceiptSectionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin-home-page', component: AdminHomePageComponent},
  {path: 'double-entry-home', component: DoubleEntryHomeComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
