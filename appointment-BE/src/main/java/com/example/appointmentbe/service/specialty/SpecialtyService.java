package com.example.appointmentbe.service.specialty;

import com.example.appointmentbe.model.specialty.Specialty;
import com.example.appointmentbe.repository.specialty.ISpecialtyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class SpecialtyService implements ISpecialtyService{

    @Autowired
    private ISpecialtyRepository iSpecialtyRepository;


    @Override
    public Page<Specialty> findAllSpecialty(Pageable pageable, String nameSearch) {
        return iSpecialtyRepository.findAllSpecialty(pageable,"%"+nameSearch+"%");
    }

    @Override
    public Specialty getSpecialtyById(Integer id) {
        return iSpecialtyRepository.getSpecialtyById(id);
    }
}