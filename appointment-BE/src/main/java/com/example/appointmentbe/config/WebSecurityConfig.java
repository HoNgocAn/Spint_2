package com.example.appointmentbe.config;

import com.example.appointmentbe.security.jwt.JwtAuthenticationFilter;
import com.example.appointmentbe.service.auth.MyUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
    @Autowired
    private MyUserDetailService myUserDetailService;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();
    }

    @Bean
    public JwtAuthenticationFilter authenticationJwtTokenFilter() {
        return new JwtAuthenticationFilter();
    }


    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(myUserDetailService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests((requests) -> requests
//                                .requestMatchers("/**").permitAll()
//                        Trang không cần đăng nhập
                                .requestMatchers("/api/login").permitAll()
                                .requestMatchers("/api/specialty/list").permitAll()
                                .requestMatchers("/api/specialty/list/home").permitAll()
                                .requestMatchers("/api/doctor/list").permitAll()
                                .requestMatchers("/api/doctor/list/specialty/**").permitAll()
                                .requestMatchers("/api/doctor/list/home").permitAll()
                                .requestMatchers("/api/customer/register").permitAll()
                                .requestMatchers("/api/specialty/details/**").permitAll()
                                .requestMatchers("/api/doctor/details/**").permitAll()
//                        Trang cần có quyền hợp lệ
//                                .requestMatchers("/api/specialty/list").hasAnyAuthority("ADMIN")
//                                .requestMatchers("/api/register").hasAnyAuthority("ROLE_ADMIN")
//                                .requestMatchers("/api/customer/search/**").hasAnyAuthority("ROLE_USER")
//                                .requestMatchers("/api/pay/**").hasAnyAuthority("ROLE_USER")
//                                .requestMatchers("/api/orders/create").permitAll()
//                                .requestMatchers("/api/changePassword").hasAnyAuthority("ROLE_ADMIN","ROLE_ACCOUNTANT","ROLE_SALESMAN")
//                                .requestMatchers("/api/employee/**").hasAnyAuthority("ROLE_ADMIN","ROLE_ACCOUNTANT","ROLE_SALESMAN")
//                                .requestMatchers("/api/productions/**","/api/type_products/**").hasAnyAuthority("ROLE_ADMIN","ROLE_SALESMAN")
//                                .requestMatchers("/api/products/create","/api/products/update","/api/products/update/details/**").hasAnyAuthority("ROLE_ADMIN","ROLE_SALESMAN")
                                .anyRequest().authenticated()
                )
                .csrf(AbstractHttpConfigurer::disable)
                .addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class)
                .formLogin((form) -> form.disable())
                .logout((logout) -> logout.permitAll());


        return http.build();
    }
}
