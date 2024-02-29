package com.example.athen.model.History;

import com.example.athen.model.Specialty.Specialty;
import com.example.athen.model.customer.Customer;
import com.example.athen.model.doctor.Doctor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Entity
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String time;

    private String status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_doctor", referencedColumnName = "id")
    private Doctor doctor;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_customer", referencedColumnName = "id")
    private Customer customer;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

}

