package com.example.appointmentbe.service.auth;

import com.example.appointmentbe.model.auth.Account;
import com.example.appointmentbe.repository.auth.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public Optional<Account> findByEmail(String email) {
        return accountRepository.findByEmail(email);
    }

    @Override
    public void updatePassword(Account account) {
        accountRepository.updatePasswordAccount(account.getEmail(),account.getPassword());
    }


    @Override
    public Account addAccount(Account account) {
        try {
            accountRepository.addAccount(account);
            Account accountNew =  accountRepository.getAccountByEmail(account.getEmail());
            return accountNew;
        }catch (Exception e){
            return null;
        }
    }
    @Override
    public void addAccountRole(int idAccount,int idRole ) {
        try {
            accountRepository.addAccountRole(idAccount,idRole);
        }catch (Exception e){
            e.getMessage();
        }

    }

}