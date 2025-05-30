package com.fueltracker.repository;

import com.fueltracker.model.FuelTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuelTransactionRepository extends JpaRepository<FuelTransaction, Long> {
}
