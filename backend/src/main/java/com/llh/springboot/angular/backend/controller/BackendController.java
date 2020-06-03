/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.llh.springboot.angular.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author lorenzo
 */
@Controller
public class BackendController {

    @RequestMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/home") // frontend1
    public String home(Model model) {
        model.addAttribute("name", "app");
        return "home";
    }

    @GetMapping("/module1") // frontend1
    public String module1(Model model) {
        model.addAttribute("name", "welcome front end 1");
        return "module1/index";
    }

    @GetMapping("/module2") // frontend1
    public String module2(Model model) {
        model.addAttribute("name", "welcome front end 2");
        return "module2/index";
    }
}
