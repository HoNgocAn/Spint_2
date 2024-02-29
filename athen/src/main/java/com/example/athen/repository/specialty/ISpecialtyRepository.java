package com.example.athen.repository.specialty;


import com.example.athen.model.Specialty.Specialty;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ISpecialtyRepository extends JpaRepository<Specialty, Integer> {

    @Query(value = "select * from specialty s  where s.name like :nameSearch",nativeQuery = true)
    Page<Specialty> findAllSpecialty(Pageable pageable, @Param("nameSearch") String nameSearch);

    @Query(value = "select * from specialty where specialty.id=:id", nativeQuery = true)
    Specialty getSpecialtyById(@Param("id") Integer id);
}
