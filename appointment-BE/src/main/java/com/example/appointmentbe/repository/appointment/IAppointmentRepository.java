package com.example.appointmentbe.repository.appointment;

import com.example.appointmentbe.dto.appointment.AppointmentDTO;
import com.example.appointmentbe.dto.appointment.IAppointmentDTO;
import com.example.appointmentbe.model.appointment.Appointment;

import com.example.appointmentbe.model.doctor.Doctor;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IAppointmentRepository  extends JpaRepository<Appointment, Integer> {

    @Query(value = "select a.*, d.name as nameDoctor from appointment a join doctor d on a.id_doctor = d.id  where a.name_customer like :nameSearch",nativeQuery = true)
    Page<IAppointmentDTO> findAllAppointment(Pageable pageable, @Param("nameSearch") String nameSearch);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO appointment(name_customer,date,time, phone, birthday, address, reason,id_doctor)" +
            " VALUES (:#{#appointmentDTO.nameCustomer}, :#{#appointmentDTO.date}, :#{#appointmentDTO.time} ,:#{#appointmentDTO.phone}, :#{#appointmentDTO.birthday}, :#{#appointmentDTO.address}," +
            " :#{#appointmentDTO.reason},:#{#appointmentDTO.idDoctor})", nativeQuery = true)
    void createAppointment(@Param("appointmentDTO") AppointmentDTO appointmentDTO);

    @Query(value = "select a.*, d.name as nameDoctor from appointment a join doctor d on a.id_doctor = d.id where a.id=:id", nativeQuery = true)
    IAppointmentDTO findAppointmentById(@Param("id") Integer id);
}
