package com.example.appointmentbe.controller.customer;


import com.example.appointmentbe.model.customer.Customer;
import com.example.appointmentbe.model.doctor.Doctor;
import com.example.appointmentbe.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private ICustomerService customerService;

    @GetMapping("/details/{email}")
    public ResponseEntity<?> detailsCustomer(@PathVariable String email){
        Customer customer = customerService.findCustomerByEmail(email);
        if (customer == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(customer,HttpStatus.OK);
    }

}
