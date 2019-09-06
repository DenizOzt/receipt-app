import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewReceiptComponent } from './new-receipt/new-receipt.component';
import { ReceiptDetailComponent } from './search-receipt/receipt-list/receipt-detail/receipt-detail.component';
import { SearchReceiptComponent } from './search-receipt/search-receipt.component';
import { EditReceiptComponent } from './edit-receipt/edit-receipt.component';

const appRoutes: Routes = [

  { path: '', redirectTo: '/new', pathMatch: 'full' },
  { path: 'new', component: NewReceiptComponent},
  { path: 'search', component: SearchReceiptComponent},
  { path: 'edit/:id', component: EditReceiptComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
