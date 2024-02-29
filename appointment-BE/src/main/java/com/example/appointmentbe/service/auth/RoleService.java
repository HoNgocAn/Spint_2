package com.example.appointmentbe.service.auth;

import com.example.appointmentbe.model.auth.Role;
import com.example.appointmentbe.repository.auth.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;

    @Override
    public Optional<Role> findByRole(String role) {
        return roleRepository.findByRole(role);
    }

    @Override
    public List<Role> findRole() {
        return roleRepository.findAll();
    }
}