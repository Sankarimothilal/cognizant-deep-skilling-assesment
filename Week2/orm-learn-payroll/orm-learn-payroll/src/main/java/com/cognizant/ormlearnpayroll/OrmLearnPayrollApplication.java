package com.cognizant.ormlearnpayroll;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearnpayroll.model.Employee;
import com.cognizant.ormlearnpayroll.service.EmployeeService;

@SpringBootApplication
public class OrmLearnPayrollApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnPayrollApplication.class);

    private static EmployeeService employeeService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(OrmLearnPayrollApplication.class, args);

        LOGGER.info("Inside Main");

        employeeService = context.getBean(EmployeeService.class);

        testGetAllEmployees();

    }

    private static void testGetAllEmployees() {

        LOGGER.info("Start - Get All Employees");

        List<Employee> employees = employeeService.getAllEmployees();

        LOGGER.debug("Employees={}", employees);

        LOGGER.info("End");

    }

}