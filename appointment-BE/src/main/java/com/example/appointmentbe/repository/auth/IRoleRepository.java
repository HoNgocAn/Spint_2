package com.example.appointmentbe.repository.auth;

import com.example.appointmentbe.model.auth.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IRoleRepository extends JpaRepository<Role, Integer> {

    @Query(value = "SELECT * FROM role WHERE role = :role", nativeQuery = true)
    Optional<Role> findByRole(@Param("role") String role);

    @Query(value = "SELECT * FROM role", nativeQuery = true)
    List<Role> findAll();
}