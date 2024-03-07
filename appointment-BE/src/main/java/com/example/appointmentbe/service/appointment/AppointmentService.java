package com.example.appointmentbe.service.appointment;

import com.example.appointmentbe.dto.appointment.AppointmentDTO;
import com.example.appointmentbe.dto.appointment.IAppointmentDTO;
import com.example.appointmentbe.model.appointment.Appointment;
import com.example.appointmentbe.model.doctor.Doctor;
import com.example.appointmentbe.repository.appointment.IAppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class AppointmentService implements IAppointmentService{


    @Autowired
    private IAppointmentRepository iAppointmentRepository;

    @Override
    public Page<IAppointmentDTO> findAllAppointment(Pageable pageable, String nameSearch) {
        return iAppointmentRepository.findAllAppointment(pageable, "%"+nameSearch+"%");
    }

    @Override
    public boolean createAppointment(AppointmentDTO appointmentDTO) {
        try {
            iAppointmentRepository.createAppointment(appointmentDTO);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public IAppointmentDTO findAppointmentById(Integer id) {
        return iAppointmentRepository.findAppointmentById(id);
    }
}
