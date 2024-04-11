package com.example.appointmentbe.repository.customer;

import com.example.appointmentbe.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

    @Query(value = "select * from customer where customer.email =:email", nativeQuery = true)
    Customer findCustomerByEmail(@Param("email") String email);

}
