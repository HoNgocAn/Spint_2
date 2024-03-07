package com.example.appointmentbe.repository.examination;

import com.example.appointmentbe.dto.appointment.IAppointmentDTO;
import com.example.appointmentbe.dto.dateExamination.IDateExaminationDTO;
import com.example.appointmentbe.model.date.DateExamination;
import com.example.appointmentbe.model.doctor.Doctor;
import com.example.appointmentbe.model.specialty.Specialty;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IDateExaminationRepository extends JpaRepository<DateExamination, Integer> {

    @Query(value = "select d.id, d.date, t.time1 as time1, t.time2 as time2, t.time3 as time3, t.time4 as time4, t.time5 as time5, t.time6 as time6, t.time7 as time7, t.time8 as time8, t.time9 as time9, t.time10 as time10 from date_examination d join time_examination t on d.id_time_exam = t.id ",nativeQuery = true)
    Page<IDateExaminationDTO> findAllDateEXam(Pageable pageable);

    @Query(value = "select d.id, d.date, t.time1 as time1, t.time2 as time2, t.time3 as time3, t.time4 as time4, t.time5 as time5, t.time6 as time6, t.time7 as time7, t.time8 as time8, t.time9 as time9, t.time10 as time10 from date_examination d join time_examination t on d.id_time_exam = t.id where d.id=:id",nativeQuery = true)
    IDateExaminationDTO findDateExaminationsById(@Param("id") Integer id);
}
