import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/receipt.model';
import { ReceiptService } from 'src/app/receipt.service';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {
  receipts: Array<any>;

  constructor(private receiptServ: ReceiptService) { }

  ngOnInit() {
    this.receiptServ.getReceipts().subscribe(
      receipts => {
        this.receipts = receipts;
      }
    );
  }

  update() {
    this.ngOnInit();
  }

  onSortByType() {
    this.receipts.sort((a, b) => (a.type > b.type) ? 1 : -1);
  }

  onSortByDateDec() {
    this.receipts.sort((a, b) => (a.date < b.date) ? 1 : -1);
  }
  onSortByDateInc() {
    this.receipts.sort((a, b) => (a.date > b.date) ? 1 : -1);
  }

  onSortByCostDec() {
    this.receipts.sort((a, b) => (a.totalPrice < b.totalPrice) ? 1 : -1);
  }

  onSortByCostInc() {
    this.receipts.sort((a, b) => (a.totalPrice > b.totalPrice) ? 1 : -1);
  }


}
