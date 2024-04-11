package com.example.appointmentbe.service.appointment;

import com.example.appointmentbe.dto.appointment.AppointmentDTO;
import com.example.appointmentbe.dto.appointment.IAppointmentDTO;

import com.example.appointmentbe.model.doctor.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

public interface IAppointmentService {


    Page<IAppointmentDTO> findAllAppointment(Pageable pageable, String nameSearch);

    boolean createAppointment(AppointmentDTO appointmentDTO);

    IAppointmentDTO findAppointmentById(@Param("id") Integer id);

    Page<IAppointmentDTO> findAllAppointmentByCustomer(Pageable pageable, @Param("id") Integer id);

    Page<IAppointmentDTO> findAllAppointmentByDoctor(Pageable pageable, @Param("id") Integer id, @Param("dates") String dates);
}
