package com.example.appointmentbe.service.customer;

import com.example.appointmentbe.model.customer.Customer;

import com.example.appointmentbe.repository.customer.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CustomerService implements ICustomerService{


    @Autowired
    private ICustomerRepository customerRepository;

    @Override
    public Customer findCustomerByEmail(String email) {
        return customerRepository.findCustomerByEmail(email);
    }
}
