
package com.example.exercise1.backend.exception;

/**
 * ClientNotFoundException
 */
public class ClientNotFoundException extends RuntimeException {

    public ClientNotFoundException(Long id){
        super("Could not found the Client id " + id);
    }



}