/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.llh.springboot.angular.backend.conf;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.header.writers.StaticHeadersWriter;

/**
 *
 * @author lorenzo
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
       
        http.formLogin()
                .loginPage("/login")
                .failureUrl("/login?error")
                .and()
                .logout()
                .logoutSuccessUrl("/")
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                .and()
                .httpBasic()
                .and()
                .headers().frameOptions().disable()
                .addHeaderWriter(
                        new StaticHeadersWriter("X-FRAME-OPTIONS", "ALLOW-FROM com.llh.springboot.vuejs"))
                .and()
                .authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/resources/**", "/webjars/**","/assets/**","/img/**","/css/**","/js/**").permitAll()
                .antMatchers("/api/rest/get-test/**").authenticated()
                .antMatchers("/login").permitAll()
                .antMatchers("/error").permitAll()
                .anyRequest().authenticated()
                .and()
                
                .csrf().disable();
    }

}
