import { Component, OnInit } from '@angular/core';
import { ReceiptService } from '../receipt.service';

@Component({
  selector: 'app-search-receipt',
  templateUrl: './search-receipt.component.html',
  styleUrls: ['./search-receipt.component.css']
})
export class SearchReceiptComponent implements OnInit {

  constructor(private receiptServ: ReceiptService) { }

  ngOnInit() {
  }


}
