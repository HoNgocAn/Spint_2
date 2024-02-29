package com.example.athen.service.auth;

import com.example.athen.model.auth.Account;

import java.util.Optional;

public interface IAccountService {

    Optional<Account> findByEmail(String email);


//    Boolean existsByEmail(String email);

    void updatePassword(Account account);

    Account addAccount(Account account);
    void addAccountRole (int idAccount,int idRole);


}