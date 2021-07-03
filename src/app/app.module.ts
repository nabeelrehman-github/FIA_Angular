import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceiptSectionComponent } from './double-entry-home/receipt-section/receipt-section.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DoubleEntryHomeComponent } from './double-entry-home/double-entry-home.component';
import { ExportReceiptComponent } from './export-receipt/export-receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceiptSectionComponent,
    LoginComponent,
    AdminHomePageComponent,
    DoubleEntryHomeComponent,
    ExportReceiptComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
