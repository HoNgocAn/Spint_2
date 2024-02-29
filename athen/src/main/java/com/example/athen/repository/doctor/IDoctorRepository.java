package com.example.athen.repository.doctor;

import com.example.athen.model.Specialty.Specialty;
import com.example.athen.model.doctor.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IDoctorRepository extends JpaRepository<Doctor, Integer> {

    @Query(value = "select * from doctor d  where d.name like :nameSearch",nativeQuery = true)
    Page<Doctor> findAllDoctor(Pageable pageable, @Param("nameSearch") String nameSearch);

    @Query(value = "select * from doctor where doctor.id_specialty=:id", nativeQuery = true)
    Page<Doctor> findAllDoctorBySpecialty(Pageable pageable,@Param("id") Integer id);
}
