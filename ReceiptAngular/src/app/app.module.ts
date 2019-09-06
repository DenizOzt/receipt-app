import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewReceiptComponent } from './new-receipt/new-receipt.component';
import { SearchReceiptComponent } from './search-receipt/search-receipt.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ReceiptDetailComponent } from './search-receipt/receipt-list/receipt-detail/receipt-detail.component';
import { EditReceiptComponent } from './edit-receipt/edit-receipt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceiptListComponent } from './search-receipt/receipt-list/receipt-list.component';
import { ReceiptService } from './receipt.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NewReceiptComponent,
    SearchReceiptComponent,
    ReceiptDetailComponent,
    HeaderComponent,
    EditReceiptComponent,
    ReceiptListComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ReceiptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
