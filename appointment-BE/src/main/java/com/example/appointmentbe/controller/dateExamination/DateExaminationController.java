package com.example.appointmentbe.controller.dateExamination;


import com.example.appointmentbe.dto.dateExamination.IDateExaminationDTO;
import com.example.appointmentbe.model.date.DateExamination;
import com.example.appointmentbe.model.doctor.Doctor;
import com.example.appointmentbe.repository.examination.IDateExaminationRepository;
import com.example.appointmentbe.service.dateExamination.IDateExaminationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/date")
public class DateExaminationController {

    @Autowired
    private IDateExaminationService iDateExaminationService;

    @GetMapping("/list")
    public ResponseEntity<?> getAllDate(
            @RequestParam(defaultValue = "0", required = false) int page
    ) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<IDateExaminationDTO> dateExaminationDTOPage = iDateExaminationService.findAllDateEXam(pageable);
        if (dateExaminationDTOPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(dateExaminationDTOPage, HttpStatus.OK);
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<?> detailsDateExam(@PathVariable Integer id){
        IDateExaminationDTO dateExamination = iDateExaminationService.findDateExaminationsById(id);
        if (dateExamination == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(dateExamination,HttpStatus.OK);
    }
}
