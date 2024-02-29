package com.example.athen.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponse implements Validator {
    private String accessToken;
    private String tokenType = "Bearer";
//    private Integer id;
//    private String email;
//    private List<String> roles;

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}