package com.example.appointmentbe.service.customer;

import com.example.appointmentbe.model.customer.Customer;
import org.springframework.data.repository.query.Param;

public interface ICustomerService {

    Customer findCustomerByEmail(@Param("email") String email);
}
