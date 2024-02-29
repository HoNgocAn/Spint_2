package com.example.athen.service.specialty;

import com.example.athen.model.Specialty.Specialty;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ISpecialtyService {

    Page<Specialty> findAllSpecialty(Pageable pageable,String nameSearch);

    @Query(value = "select * from specialty where specialty.id=:id", nativeQuery = true)
    Specialty getSpecialtyById(@Param("id") Integer id);


}

