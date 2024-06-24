
package com.example.exercise1.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.exercise1.backend.exception.ClientNotFoundException;
import com.example.exercise1.backend.model.Client;
import com.example.exercise1.backend.respository.ClientRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin("http://localhost:5173")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;
    
    @PostMapping("/client")
    Client newClient(@RequestBody Client newClient){
        return clientRepository.save(newClient);
    }
    
    @GetMapping("/getallclient")
    List<Client> getAllClient(){
        return clientRepository.findAll();
    }

    @GetMapping("/getclient/{id}")
    Client getClientById(@PathVariable("id") Long id){
        return clientRepository.findById(id)
        .orElseThrow(() -> new ClientNotFoundException(id) );
    }
        
    @PutMapping("/getclient/{id}")
    Client updateClient (@RequestBody Client newClient, @PathVariable("id") long id){
        return clientRepository.findById(id)
        .map(client -> {
            client.setUsername(newClient.getUsername() );
            client.setName(newClient.getName());
            client.setEmail(newClient.getEmail());
            return clientRepository.save(client);
        }).orElseThrow(() -> new ClientNotFoundException(id) );
    }

    @DeleteMapping("/getclient/{id}")
    String deleteClient (@PathVariable("id") Long id){
        if(!clientRepository.existsById(id)){
            throw new ClientNotFoundException(id);
        }
            clientRepository.deleteById(id);
            return "Client with id " + id + " has been deleted success";

    }


}