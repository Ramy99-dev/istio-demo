package com.microservice2.microservice2.controller;

import java.time.LocalDate;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/date")
public class DateController {
    

    @GetMapping("/currentDate")
    public String getCurrentDate() {
        LocalDate currentDate = LocalDate.now();
        return "Current Date: " + currentDate.toString();
    }
}
