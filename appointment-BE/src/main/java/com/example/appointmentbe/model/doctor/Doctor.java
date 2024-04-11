package com.example.appointmentbe.model.doctor;


import com.example.appointmentbe.model.appointment.Appointment;
import com.example.appointmentbe.model.auth.Account;
import com.example.appointmentbe.model.specialty.Specialty;
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
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String degree;

    private String email;

    private String birthday;

    private String address;

    private String phone;

    @Column(columnDefinition = "bit(1)")
    private Boolean gender;

    private String avatar;

    @JsonBackReference
    @OneToMany(mappedBy = "doctor")
    private Set<Appointment> appointments;


    @ManyToOne
    @JoinColumn(name = "id_specialty", referencedColumnName = "id")
    private Specialty specialty;

    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "id_account",  referencedColumnName = "id")
    private Account account;

}

