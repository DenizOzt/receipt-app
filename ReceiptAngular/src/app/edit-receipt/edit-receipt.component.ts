import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReceiptService } from '../receipt.service';
import { Receipt } from '../receipt.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-receipt',
  templateUrl: './edit-receipt.component.html',
  styleUrls: ['./edit-receipt.component.css']
})

export class EditReceiptComponent implements OnInit, OnDestroy {

  receiptForm: FormGroup;
  newReceipt: any = {};
  subscription: Subscription;
  id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private receiptServ: ReceiptService) { }

  ngOnInit() {
      this.subscription = this.route.params.subscribe(params => {
      this.id = params.id;
      this.receiptServ.getReceipt(this.id).subscribe(
        (receipt: any) => {
          receipt.href = '//localhost:8080/receipts/' + receipt.id;
          this.newReceipt = receipt;
          this.newReceipt.href = receipt.href;

          this.receiptForm = new FormGroup({
            companyName: new FormControl(this.newReceipt.companyName, [Validators.required]),
            date: new FormControl(this.newReceipt.date, [Validators.required]),
            number: new FormControl(this.newReceipt.number, [Validators.required]),
            type: new FormControl(this.newReceipt.type, [Validators.required]),
            taxPercentage: new FormControl(this.newReceipt.taxPercentage, [Validators.required]),
            totalPrice: new FormControl(this.newReceipt.totalPrice, [Validators.required]),
          });
        }
      );
  });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.newReceipt = this.receiptForm.value;
    this.newReceipt.id = this.id;
    this.newReceipt.href = '//localhost:8080/receipts/' + this.id;
    this.receiptServ.updateReceipt(this.newReceipt).subscribe(
      result => {
        this.router.navigate(['/search']);
      }
    );
  }


    onCanceled() {
      this.router.navigate(['/search']);
    }
}
