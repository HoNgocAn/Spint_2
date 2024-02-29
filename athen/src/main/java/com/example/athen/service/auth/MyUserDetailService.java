package com.example.athen.service.auth;

import com.example.athen.model.auth.Account;
import com.example.athen.model.auth.MyUserDetail;
import com.example.athen.repository.auth.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private IAccountRepository accountRepository;

    /**
     * This method loads user details by email.
     * @author: NamND
     * @date: 10/01/2024
     * @param email The email.
     * @return The user details of the specified username.
     * @throws UsernameNotFoundException If the username is not found.
     */
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Account account = accountRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Email " + email + " không tồn tại"));
        return new MyUserDetail(account);
    }
}
