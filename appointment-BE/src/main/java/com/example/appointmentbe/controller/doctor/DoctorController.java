package com.example.appointmentbe.controller.doctor;


import com.example.appointmentbe.model.doctor.Doctor;
import com.example.appointmentbe.model.specialty.Specialty;
import com.example.appointmentbe.service.doctor.IDoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/doctor")
public class DoctorController {

    @Autowired
    private IDoctorService iDoctorService;

    @GetMapping("/list")
    public ResponseEntity<?> getAllDoctor(
            @RequestParam(name = "nameDoctor", defaultValue = "", required = false) String name,
            @RequestParam(defaultValue = "0", required = false) int page
    ) {
        Pageable pageable = PageRequest.of(page, 5);
        Page<Doctor> doctorPage = iDoctorService.findAllDoctor(pageable, name);
        if (doctorPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(doctorPage, HttpStatus.OK);
    }


    @GetMapping("/list/home")
    public ResponseEntity<?> getAllDoctorHome(
            @RequestParam(name = "nameDoctor", defaultValue = "", required = false) String name,
            @RequestParam(defaultValue = "0", required = false) int page
    ) {
        Pageable pageable = PageRequest.of(page, 3);
        Page<Doctor> doctorPage = iDoctorService.findAllDoctor(pageable, name);
        if (doctorPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(doctorPage, HttpStatus.OK);
    }

    @GetMapping("/list/specialty/{id}")
    public ResponseEntity<?> getAllDoctorBySpecialty(
            @RequestParam(defaultValue = "0", required = false) int page, @PathVariable Integer id
    ) {
        Pageable pageable = PageRequest.of(page, 5);
        Page<Doctor> doctorPage = iDoctorService.findAllDoctorBySpecialty(pageable, id);
        if (doctorPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(doctorPage, HttpStatus.OK);
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<?> detailsDoctor(@PathVariable Integer id){
        Doctor doctor = iDoctorService.findDoctorById(id);
        if (doctor == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(doctor,HttpStatus.OK);
    }

}
