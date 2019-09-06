import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receipt } from 'src/app/receipt.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ReceiptService } from 'src/app/receipt.service';

@Component({
  selector: 'app-receipt-detail',
  templateUrl: './receipt-detail.component.html',
  styleUrls: ['./receipt-detail.component.css']
})
export class ReceiptDetailComponent implements OnInit {

  @Output() deleteEvent = new EventEmitter();
  @Input() receipt: any;
  id: string;




  constructor(private router: Router,
              private route: ActivatedRoute,
              private receiptServ: ReceiptService) { }

  ngOnInit() {
    this.receipt.date = new Date(this.receipt.date);
    this.receipt.href = '//localhost:8080/receipts/' + this.receipt.id;
  }

  onEdit() {
    this.id = this.receipt.id;
    this.router.navigate(['../', 'edit', this.id], {relativeTo: this.route});
  }

  onDelete(href: string) {
    this.receiptServ.deleteReceipt(href).subscribe(
      result => {
        this.deleteEvent.emit();
      });

  }
}
