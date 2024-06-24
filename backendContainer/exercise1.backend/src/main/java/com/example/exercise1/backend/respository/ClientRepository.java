package com.example.exercise1.backend.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.exercise1.backend.model.Client;

public interface ClientRepository extends JpaRepository<Client,Long> {
    
}
