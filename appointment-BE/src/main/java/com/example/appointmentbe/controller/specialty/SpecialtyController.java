package com.example.appointmentbe.controller.specialty;


import com.example.appointmentbe.model.specialty.Specialty;
import com.example.appointmentbe.service.specialty.ISpecialtyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/specialty")
public class SpecialtyController {

    @Autowired
    private ISpecialtyService iSpecialtyService;

    @GetMapping("/list")
    public ResponseEntity<?> getAllSpecialty(
            @RequestParam(name = "nameSpecialty", defaultValue = "", required = false) String name,
            @RequestParam(defaultValue = "0", required = false) int page
    ) {
        Pageable pageable = PageRequest.of(page, 5);
        Page<Specialty> specialtyPage = iSpecialtyService.findAllSpecialty(pageable, name);
        if (specialtyPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(specialtyPage, HttpStatus.OK);
    }


    @GetMapping("/list/home")
    public ResponseEntity<?> getAllSpecialtyHome(
            @RequestParam(name = "nameSpecialty", defaultValue = "", required = false) String name,
            @RequestParam(defaultValue = "0", required = false) int page
    ) {
        Pageable pageable = PageRequest.of(page, 3);
        Page<Specialty> specialtyPage = iSpecialtyService.findAllSpecialty(pageable, name);
        if (specialtyPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(specialtyPage, HttpStatus.OK);
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<?> detailsSpecialty(@PathVariable Integer id){
        Specialty specialty = iSpecialtyService.getSpecialtyById(id);
        if (specialty == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(specialty,HttpStatus.OK);
    }

}
