import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReceiptService } from '../receipt.service';
import { Receipt } from '../receipt.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-receipt',
  templateUrl: './new-receipt.component.html',
  styleUrls: ['./new-receipt.component.css']
})
export class NewReceiptComponent implements OnInit {
  @ViewChild('f', { static: false }) receiptForm: NgForm;


  receiptAdded = false;

  constructor(private receiptService: ReceiptService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    /* this.newReceipt.id = this.receiptService.getIndex();
    this.newReceipt.companyName = this.receiptForm.value.companyName;
    this.newReceipt.date = this.receiptForm.value.date;
    this.newReceipt.number = this.receiptForm.value.receiptNum;
    this.newReceipt.type = this.receiptForm.value.receiptType;
    this.newReceipt.taxPercentage = this.receiptForm.value.taxPercentage;
    this.newReceipt.totalPrice = this.receiptForm.value.totalCost;


    this.receiptService.addReceipt(this.newReceipt);*/


    this.receiptService.addReceipt(form.value).subscribe(result => {
      this.router.navigate(['/new']);
    });

    this.receiptAdded = true;

    this.receiptForm.reset();
    setTimeout(() => {
      this.receiptAdded = false;
    }, 1000);

  }

}
