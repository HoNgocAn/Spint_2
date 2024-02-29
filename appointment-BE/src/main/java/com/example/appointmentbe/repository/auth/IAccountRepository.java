package com.example.appointmentbe.repository.auth;

import com.example.appointmentbe.model.auth.Account;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IAccountRepository extends JpaRepository<Account,Integer> {

    @Query(value = "SELECT * FROM accounts as a WHERE a.email = :email", nativeQuery = true)
    Optional<Account> findByEmail(@Param("email") String email);

    @Query(value = "SELECT accounts.* FROM accounts WHERE email = :email", nativeQuery = true)
    Account getAccountByEmail(@Param("email") String email);
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO accounts (email,password) " +
            "VALUES ( :#{#account.email}, :#{#account.password} ) ", nativeQuery = true)
    void addAccount(@Param("account") Account account);
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO account_role (id_account,id_role) " +
            "VALUES ( :idAccount, :idRole ) ", nativeQuery = true)
    void addAccountRole(@Param("idAccount") int idAccount,@Param("idRole") int idRole);

    @Modifying
    @Transactional
    @Query(value = "UPDATE accounts SET password = :password WHERE email =:email",nativeQuery = true)
    void updatePasswordAccount(@Param("email") String email,@Param("password") String password);

    @Query(value = "select a.id from accounts a where `email` = :email",nativeQuery = true)
    Integer findAccountByEmail(@Param("email") String email);
}