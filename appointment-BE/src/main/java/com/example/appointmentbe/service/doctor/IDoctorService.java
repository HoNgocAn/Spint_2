package com.example.appointmentbe.service.doctor;

import com.example.appointmentbe.model.doctor.Doctor;
import com.example.appointmentbe.model.specialty.Specialty;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

public interface IDoctorService {
    Page<Doctor> findAllDoctor(Pageable pageable, String nameSearch);

    Page<Doctor> findAllDoctorBySpecialty(Pageable pageable, @Param("id") Integer id);

    Doctor findDoctorById(@Param("id") Integer id);

}

