package com.example.appointmentbe.model.customer;

import com.example.appointmentbe.model.appointment.Appointment;
import com.example.appointmentbe.model.auth.Account;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String email;

    private String birthday;

    private String address;

    private String phone;

    @Column(columnDefinition = "bit(1)")
    private Boolean gender;

    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "id_account")
    private Account account;


    @JsonBackReference
    @OneToMany(mappedBy = "customer")
    private Set<Appointment> appointments;

}

