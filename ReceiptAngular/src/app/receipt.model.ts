export class Receipt {
  public companyName: string;
  public date: Date;
  public number: number;
  public type: string;
  public taxPercentage: number;
  public totalPrice: number;

  constructor(compName: string, date: Date, num: number, type: string, tax: number, totalPrice: number) {
    this.companyName = compName;
    this.date = date;
    this.number = num;
    this.type = type;
    this.taxPercentage = tax;
    this.totalPrice = totalPrice;
  }
}
