package com.example.athen.service.doctor;

import com.example.athen.model.Specialty.Specialty;
import com.example.athen.model.doctor.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IDoctorService {
    Page<Doctor> findAllDoctor(Pageable pageable, String nameSearch);

    Page<Doctor> findAllDoctorBySpecialty(Pageable pageable, @Param("id") Integer id);
}
