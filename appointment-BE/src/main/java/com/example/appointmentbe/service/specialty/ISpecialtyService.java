package com.example.appointmentbe.service.specialty;

import com.example.appointmentbe.model.specialty.Specialty;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ISpecialtyService {

    Page<Specialty> findAllSpecialty(Pageable pageable, String nameSearch);

    Specialty getSpecialtyById(@Param("id") Integer id);


}