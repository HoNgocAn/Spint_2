package com.example.appointmentbe.service.auth;

import com.example.appointmentbe.model.auth.Role;

import java.util.List;
import java.util.Optional;

public interface IRoleService {

    Optional<Role> findByRole(String role);
    List<Role> findRole();
}
