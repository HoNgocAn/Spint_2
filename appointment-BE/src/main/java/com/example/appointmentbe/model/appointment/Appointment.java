package com.example.appointmentbe.model.appointment;


import com.example.appointmentbe.model.customer.Customer;
import com.example.appointmentbe.model.doctor.Doctor;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nameCustomer;

    private String phone;

    private String birthday;

    private String address;

    private String reason;

    private String date;

    private String time;

    @ManyToOne
    @JoinColumn(name = "id_doctor", referencedColumnName = "id")
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "id_customer", referencedColumnName = "id")
    private Customer customer;


}
