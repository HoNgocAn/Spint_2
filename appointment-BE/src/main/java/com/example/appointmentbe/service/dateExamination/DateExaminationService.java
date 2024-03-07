package com.example.appointmentbe.service.dateExamination;

import com.example.appointmentbe.dto.dateExamination.IDateExaminationDTO;
import com.example.appointmentbe.model.date.DateExamination;
import com.example.appointmentbe.repository.examination.IDateExaminationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DateExaminationService implements IDateExaminationService{

    @Autowired
    private IDateExaminationRepository iDateExaminationRepository;

    @Override
    public Page<IDateExaminationDTO> findAllDateEXam(Pageable pageable) {
        return iDateExaminationRepository.findAllDateEXam(pageable);
    }

    @Override
    public IDateExaminationDTO findDateExaminationsById(Integer id) {
        return iDateExaminationRepository.findDateExaminationsById(id);
    }

}
