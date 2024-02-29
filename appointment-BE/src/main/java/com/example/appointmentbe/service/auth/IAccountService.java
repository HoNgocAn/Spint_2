package com.example.appointmentbe.service.auth;

import com.example.appointmentbe.model.auth.Account;

import java.util.Optional;

public interface IAccountService {

    Optional<Account> findByEmail(String email);


//    Boolean existsByEmail(String email);

    void updatePassword(Account account);

    Account addAccount(Account account);
    void addAccountRole (int idAccount,int idRole);


}