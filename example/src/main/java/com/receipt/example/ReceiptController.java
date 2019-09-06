package com.receipt.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
class ReceiptController {
    private ReceiptRepository repository;

    public ReceiptController(ReceiptRepository repository) {
        this.repository = repository;
    }



    @GetMapping("/all-receipts")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Receipt> receipts() {
        return repository.findAll().stream().collect(Collectors.toList());  
    }
}