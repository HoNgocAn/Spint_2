package com.example.athen.model.appointment;


import com.example.athen.model.customer.Customer;
import com.example.athen.model.doctor.Doctor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String birthday;

    @Column(columnDefinition = "bit(1)")
    private Boolean gender;


    private String address;

    private String status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_doctor", referencedColumnName = "id")
    private Doctor doctor;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_customer", referencedColumnName = "id")
    private Customer customer;
}
