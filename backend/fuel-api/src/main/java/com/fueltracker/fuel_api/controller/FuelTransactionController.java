package com.fueltracker.controller;

import com.fueltracker.model.FuelTransaction;
import com.fueltracker.repository.FuelTransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fuel")
@CrossOrigin(origins = "*")  
public class FuelTransactionController {

    @Autowired
    private FuelTransactionRepository repository;

    @PostMapping
    public FuelTransaction saveTransaction(@RequestBody FuelTransaction transaction) {
        return repository.save(transaction);
    }

    @GetMapping
    public List<FuelTransaction> getAllTransactions() {
        return repository.findAll();
    }
    
    @GetMapping("/test")
    public String test() {
    return "API is working";
    }

    @DeleteMapping("/{id}")
    public void deleteTransaction(@PathVariable Long id) {
    repository.deleteById(id);
    }
 

}
