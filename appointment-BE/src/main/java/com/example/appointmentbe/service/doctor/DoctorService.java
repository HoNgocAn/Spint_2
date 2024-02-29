package com.example.appointmentbe.service.doctor;

import com.example.appointmentbe.model.doctor.Doctor;
import com.example.appointmentbe.model.specialty.Specialty;
import com.example.appointmentbe.repository.doctor.IDoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DoctorService implements IDoctorService{

    @Autowired
    private IDoctorRepository iDoctorRepository;

    @Override
    public Page<Doctor> findAllDoctor(Pageable pageable, String nameSearch) {
        return iDoctorRepository.findAllDoctor(pageable,"%"+nameSearch+"%");
    }

    @Override
    public Page<Doctor> findAllDoctorBySpecialty(Pageable pageable, Integer id) {
        return iDoctorRepository.findAllDoctorBySpecialty(pageable,id);
    }

    @Override
    public Doctor findDoctorById(Integer id) {
        return iDoctorRepository.findDoctorById(id);
    }
}