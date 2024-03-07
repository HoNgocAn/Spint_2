package com.example.appointmentbe.controller.appointment;


import com.example.appointmentbe.dto.appointment.AppointmentDTO;
import com.example.appointmentbe.dto.appointment.IAppointmentDTO;
import com.example.appointmentbe.model.appointment.Appointment;
import com.example.appointmentbe.model.doctor.Doctor;
import com.example.appointmentbe.service.appointment.IAppointmentService;
import com.example.appointmentbe.service.doctor.IDoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/appointment")
public class AppointmentController {

    @Autowired
    private IAppointmentService iAppointmentService;

    @GetMapping("/list")
    public ResponseEntity<?> getAllAppointment(
            @RequestParam(name = "nameCustomer", defaultValue = "", required = false) String name,
            @RequestParam(defaultValue = "0", required = false) int page
    ) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<IAppointmentDTO> appointmentPage = iAppointmentService.findAllAppointment(pageable, name);
        if (appointmentPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(appointmentPage, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Void> addAppointment(@RequestBody AppointmentDTO appointmentDTO, BindingResult bindingResult){
        new AppointmentDTO().validate(appointmentDTO,bindingResult);
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        boolean status = iAppointmentService.createAppointment(appointmentDTO);
        if (!status){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<?> detailsAppointment(@PathVariable Integer id){
        IAppointmentDTO appointment = iAppointmentService.findAppointmentById(id);
        if (appointment == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(appointment,HttpStatus.OK);
    }

}
