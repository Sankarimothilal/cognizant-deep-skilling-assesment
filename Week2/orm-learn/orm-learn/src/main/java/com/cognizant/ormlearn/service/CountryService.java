package com.cognizant.ormlearn.service;
import com.cognizant.ormlearn.service.CountryService;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional
    public Country getCountry(String code) {
        return countryRepository.findByCode(code);
    }
    
    @Transactional
    public List<Country> searchCountries(String name) {
        return countryRepository.findByNameContainingIgnoreCase(name);
    }
    
    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
    }
    
    @Transactional
    public List<Country> searchCountriesSorted(String name) {
        return countryRepository.findByNameContainingIgnoreCaseOrderByNameAsc(name);
    }
    
    @Transactional
    public Country getCountryHql(String code) {
        return countryRepository.getCountry(code);
    }

    @Transactional
    public Country getCountryNative(String code) {
        return countryRepository.getCountryNative(code);
    }

}