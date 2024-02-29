package com.example.athen.controller.auth;

import com.example.athen.dto.auth.AccountDTO;
import com.example.athen.dto.auth.ChangePasswordDTO;
import com.example.athen.dto.auth.JwtResponse;
import com.example.athen.dto.auth.LoginDTO;
import com.example.athen.model.auth.Account;
import com.example.athen.model.auth.MyUserDetail;
import com.example.athen.model.auth.Role;
import com.example.athen.security.jwt.JwtUtils;
import com.example.athen.service.auth.IAccountService;
import com.example.athen.service.auth.MyUserDetailService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("/api")
@RestController
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private MyUserDetailService myUserDetailService;

    @Autowired
    private JwtUtils jwtProvider;

    @Autowired
    private AuthenticationManager authenticationManager;


    @Autowired
    private IAccountService accountService;
    @Autowired
    private PasswordEncoder passwordEncoder;
//
//    @Autowired
//    private IEmployeeService employeeService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginDTO loginDTO, BindingResult bindingResult) {
        Map<String, String> errors = new HashMap<>();
        loginDTO.validate(loginDTO, bindingResult);
        if (bindingResult.hasErrors()) {
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>("Thông tin đăng nhập không chính xác.", HttpStatus.UNAUTHORIZED);
        }
        try {
            myUserDetailService.loadUserByUsername(loginDTO.getEmail());
//            Được sử dụng để tải thông tin người dùng từ cơ sở dữ liệu hoặc bất kỳ nguồn dữ liệu nào khác dựa
//            trên địa chỉ email được cung cấp trong loginDTO. Thông tin người dùng này thường được sử dụng để
//            xác thực người dùng trong quá trình đăng nhập vào hệ thống. Sau khi thông tin người dùng được tải,
//            nó có thể được sử dụng để kiểm tra mật khẩu và các thông tin xác thực khác để xác định xem người dùng
//            có quyền truy cập vào hệ thống hay không.
            Authentication authentication = authenticationManager.authenticate(
//                    Được sử dụng để xác thực thông tin người dùng, ở đây dựa vào email và password
                    new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            MyUserDetail myUserDetail = (MyUserDetail) authentication.getPrincipal();

            // Tạo đối tượng để trả về
            JwtResponse jwtResponse = new JwtResponse();
            BeanUtils.copyProperties(myUserDetail.getAccount(), jwtResponse);
            // Tạo Token cho đối tượng trả về;
            String jwt = jwtProvider.createToken((MyUserDetail) authentication.getPrincipal());
            jwtResponse.setAccessToken(jwt);

            return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
        } catch (UsernameNotFoundException e) {
            return new ResponseEntity<>("Thông tin đăng nhập không chính xác.", HttpStatus.UNAUTHORIZED);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>("Thông tin đăng nhập không chính xác.", HttpStatus.UNAUTHORIZED);
        }
    }

    @PatchMapping("/changePassword")
    public ResponseEntity<?> changePassword(@Valid @RequestBody ChangePasswordDTO changePasswordDTO, BindingResult bindingResult) {
        Map<String, String> errors = new HashMap<>();
        if (changePasswordDTO.getNewPassword() == null || changePasswordDTO.getNewPassword().equals("")) {
            errors.put("newPassword", "Mật khẩu mới không được trống hoặc null");
            return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }
        changePasswordDTO.validate(changePasswordDTO, bindingResult);
        if (bindingResult.hasErrors()) {
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(changePasswordDTO.getEmail(), changePasswordDTO.getPassword()));
            Account account = accountService.findByEmail(authentication.getName()).get();
            account.setPassword(passwordEncoder.encode(changePasswordDTO.getNewPassword()));
            accountService.updatePassword(account);
            return new ResponseEntity<>("Đổi Mật Khẩu Thành Công!", HttpStatus.OK);
        } catch (BadCredentialsException e) {
            errors.put("password", "Mật Khẩu Cũ Không Chính Xác.");
            return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }
    }

//    @PostMapping("/register")
//    public ResponseEntity<?> register(@Valid @RequestBody AccountDTO accountDTO, BindingResult bindingResult) {
//        Map<String, String> errors = new HashMap<>();
//        accountDTO.setName(accountDTO.getName().trim());
//        new AccountDTO().validate(accountDTO, bindingResult);
//        if (accountService.findByEmail(accountDTO.getEmail()).isPresent()) {
//            errors.put("email", "Email đã tồn tại");
//        }
//        if (bindingResult.hasErrors()) {
//            for (FieldError err : bindingResult.getFieldErrors()) {
//                errors.put(err.getField(), err.getDefaultMessage());
//            }
//        }
//        if (errors.size() == 0) {
//
//            Account account = new Account();
//            BeanUtils.copyProperties(accountDTO, account);
//            account.setPassword(passwordEncoder.encode(account.getPassword()));
////        Thêm account
//            Account accountNew = accountService.addAccount(account);
//            if (accountNew == null) {
//                return new ResponseEntity<>("Thêm tài khoản thất bại.", HttpStatus.BAD_REQUEST);
//            }
//            //        Thêm account_role
//            Role role = new Role();
//            BeanUtils.copyProperties(accountDTO, role);
//            accountService.addAccountRole(accountNew.getId(), role.getIdRole());
//
////        Thêm employee
//            Employee employee = new Employee();
//            BeanUtils.copyProperties(accountDTO, employee);
//            employee.setCode(CodeEmployeeGenerator.generateCode());
//            employee.setAccount(accountNew);
//            employeeService.addEmployee(employee);
//            return new ResponseEntity<>("Thêm tài khoản thành công", HttpStatus.OK);
//        }
//        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
//    }

}
