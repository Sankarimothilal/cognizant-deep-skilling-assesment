package com.cognizant.ormlearnpayroll.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearnpayroll.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}