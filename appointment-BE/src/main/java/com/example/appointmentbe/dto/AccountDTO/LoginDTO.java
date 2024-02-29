package com.example.appointmentbe.dto.AccountDTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO implements Validator {

    @NotBlank(message = "Email không được để trống.")
    @Pattern(regexp = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$",message = "Email sai định dạng.")
    @Size(min = 15,message = "Mật khẩu phải từ 15 kí tự")
    @Size(max = 40,message = "Email phải ít hơn hoặc bằng 45 ký tự")
    private String email;

    @NotBlank(message = "Mật khẩu không được để trống.")
    @Pattern(regexp = "^\\w+$",message = "Mật khẩu không chứa ký tự đặc biệt.")
    @Size(min = 8,message = "Mật khẩu phải từ 8 kí tự")
    @Size(max = 20,message = "Mật khẩu phải ít hơn hoặc bằng 20 ký tự")
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
