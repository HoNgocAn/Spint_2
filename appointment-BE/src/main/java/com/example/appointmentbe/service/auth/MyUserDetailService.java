package com.example.appointmentbe.service.auth;

import com.example.appointmentbe.model.auth.Account;
import com.example.appointmentbe.model.auth.MyUserDetail;
import com.example.appointmentbe.repository.auth.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Account account = accountRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Email " + email + " không tồn tại"));
        return new MyUserDetail(account);
    }
}
