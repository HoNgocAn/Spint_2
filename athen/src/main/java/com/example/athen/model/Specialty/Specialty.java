package com.example.athen.model.Specialty;

import com.example.athen.model.doctor.Doctor;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Set;


@Entity
public class Specialty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String mission;

    private String foundedYear;

    private String img;

    @JsonBackReference
    @OneToMany(mappedBy = "specialty")
    private Set<Doctor> doctors;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMission() {
        return mission;
    }

    public void setMission(String mission) {
        this.mission = mission;
    }

    public String getFoundedYear() {
        return foundedYear;
    }

    public void setFoundedYear(String foundedYear) {
        this.foundedYear = foundedYear;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Set<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(Set<Doctor> doctors) {
        this.doctors = doctors;
    }

    public Specialty() {
    }

    public Specialty(Integer id, String name, String mission, String foundedYear, String img, Set<Doctor> doctors) {
        this.id = id;
        this.name = name;
        this.mission = mission;
        this.foundedYear = foundedYear;
        this.img = img;
        this.doctors = doctors;
    }
}
