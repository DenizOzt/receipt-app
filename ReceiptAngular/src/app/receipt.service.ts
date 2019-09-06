import { Injectable } from '@angular/core';
import { Receipt } from './receipt.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http: HttpClient) { }

  public API = '//localhost:8080';
  public RECEIPTS_API = this.API + '/receipts';



  getReceipt(index: string) {
    return this.http.get(this.RECEIPTS_API + '/' + index);
  }

  getReceipts(): Observable<any> {
    return this.http.get(this.API + '/all-receipts');
  }

  updateReceipt(receipt: any): Observable<any> {
    let result: Observable<any>;
    result = this.http.put(receipt.href, receipt);
    return result;
  }

  addReceipt(receipt: any): Observable<any> {
    let result: Observable<any>;
    result = this.http.post(this.RECEIPTS_API, receipt);
    return result;
  }

  deleteReceipt(href: string) {
    return this.http.delete(href);
  }
}
