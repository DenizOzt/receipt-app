package com.receipt.example;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor
public class Receipt {

	@Id @GeneratedValue()
    public Long id;
    public @NonNull String companyName;
    public @NonNull String date;
    public @NonNull int number;
    public @NonNull String type;
    public @NonNull int taxPercentage;
    public @NonNull int totalPrice;

   /*  public Receipt() {}
    
    public Receipt(String companyName, String date, Integer number ,String type, Integer tax, Integer total) {
        this.companyName = companyName;
        this.date = date;
        this.number = number;
        this.type = type;
        this.taxPercentage = tax;
        this.totalPrice = total;
    } */

  /*   @Override
    public String toString() {
        return  "\n Company Name: " + this.companyName + 
                "\n Date: " + this.date + 
                "\n Number: " + this.number +
                "\n Type: " + this.type + 
                "\n Tax: " + this.taxPercentage + 
                "\n Total Price: " + this.totalPrice;
    } */


   
}