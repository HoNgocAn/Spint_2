package com.example.athen.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ChangePasswordDTO implements Validator {
    private String email;
    private String password;
    private String newPassword;
    private String againNewPassword;

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    private static final String REGEX_PASSWORD = "^(?=.*[0-9])+(?=.*[a-z])+(?=.*[A-Z])+(?=.*[@#$%^&+=])+(?=\\S+$).{6,20}$";
    private static final String REGEX_SIMPLE_PASSWORD = "^\\w+$";

    @Override
    public void validate(Object target, Errors errors) {
        ChangePasswordDTO changePasswordDTO = (ChangePasswordDTO) target;
        //check format password
        if (changePasswordDTO.getPassword() == null) {
            errors.rejectValue("password", "", "Vui long nhap mat khau");
        } else if (changePasswordDTO.getPassword().trim().equals("")) {
            errors.rejectValue("password", "", "Vui long nhap mat khau");

        } else if (!changePasswordDTO.getPassword().matches(REGEX_SIMPLE_PASSWORD)) {
            errors.rejectValue("password", "", "Mat khau sai dinh dang");
        }
        //check format newPassword
        if (changePasswordDTO.getNewPassword() == null) {
            errors.rejectValue("newPassword", "", "Vui long nhap mat khau moi");
        } else if (changePasswordDTO.getNewPassword().trim().equals("")) {
            errors.rejectValue("newPassword", "", "Vui long nhap mat khau moi");
        } else if (!changePasswordDTO.getNewPassword().matches(REGEX_SIMPLE_PASSWORD)) {
            errors.rejectValue("newPassword", "", "Mat khau moi sai dinh dang");
        }
        //check format againNewPassword
        if (changePasswordDTO.getAgainNewPassword() == null) {
            errors.rejectValue("againNewPassword", "", "Vui long nhap lai mat khau moi");
        } else if (changePasswordDTO.getAgainNewPassword().trim().equals("")) {
            errors.rejectValue("againNewPassword", "", "Vui long nhap lai mat khau moi");
        } else if (!changePasswordDTO.getAgainNewPassword().matches(REGEX_SIMPLE_PASSWORD)) {
            errors.rejectValue("againNewPassword", "", "Mat khau nhap lai sai dinh dang");
        }
        //check duplicate password
        if (!changePasswordDTO.getNewPassword().equals(changePasswordDTO.getAgainNewPassword())) {
            errors.rejectValue("againNewPassword", null, "Mat khau nhap lai khong chinh xac");
        }
    }
}

