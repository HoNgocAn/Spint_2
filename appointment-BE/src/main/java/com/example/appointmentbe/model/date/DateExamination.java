package com.example.appointmentbe.model.date;

import com.example.appointmentbe.model.appointment.Appointment;
import com.example.appointmentbe.model.auth.Account;
import com.example.appointmentbe.model.time.TimeExamination;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Entity
public class DateExamination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String date;

    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "id_timeExam",  referencedColumnName = "id")
    private TimeExamination timeExamination;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


}
