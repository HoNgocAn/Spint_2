package com.example.appointmentbe.controller.auth;

import com.example.appointmentbe.model.auth.Role;
import com.example.appointmentbe.service.auth.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/role")
@CrossOrigin("*")
public class RoleController {
    @Autowired
    private IRoleService roleService;
    @GetMapping("")
    public ResponseEntity<List<Role>> getCustomerTypeList() {
        List<Role> roleList = roleService.findRole();
        if (roleList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else
            return new ResponseEntity<>(roleList,HttpStatus.OK);
    }

}