package com.example.appointmentbe.dto.appointment;

import com.example.appointmentbe.model.doctor.Doctor;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDTO implements Validator {

    private Integer id;

    @NotBlank(message = "Tên khách hàng không được để trống hoặc khoảng trắng")
    private String nameCustomer;
    @NotBlank(message = "Số điện thoại không được để trống hoặc khoảng trắng")
    private String phone;

    @NotBlank(message = "Ngày, tháng, năm sinh không được để trống hoặc khoảng trắng")
    private String birthday;

    @NotBlank(message = "Địa chỉ không được để trống hoặc khoảng trắng")
    private String address;

    @NotBlank(message = "Lý do không được để trống hoặc khoảng trắng")
    private String reason;

    @NotBlank(message = "Ngày khám không được để trống hoặc khoảng trắng")
    private String date;

    @NotBlank(message = "Thời gian không được để trống hoặc khoảng trắng")
    private String time;

    @NotBlank(message = "Id bác sĩ không được để trống hoặc khoảng trắng")
    private Integer idDoctor;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getIdDoctor() {
        return idDoctor;
    }

    public void setIdDoctor(Integer idDoctor) {
        this.idDoctor = idDoctor;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
