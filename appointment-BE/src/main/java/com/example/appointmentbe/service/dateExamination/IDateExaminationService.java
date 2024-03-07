package com.example.appointmentbe.service.dateExamination;

import com.example.appointmentbe.dto.dateExamination.IDateExaminationDTO;
import com.example.appointmentbe.model.date.DateExamination;
import com.example.appointmentbe.repository.examination.IDateExaminationRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

public interface IDateExaminationService {

    Page<IDateExaminationDTO> findAllDateEXam(Pageable pageable);

    IDateExaminationDTO findDateExaminationsById(@Param("id") Integer id);
}
