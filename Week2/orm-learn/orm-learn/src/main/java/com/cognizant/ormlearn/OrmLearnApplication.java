package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);

        LOGGER.info("Inside Main");

        countryService = context.getBean(CountryService.class);

        testGetAllCountries();
        testGetCountry();
        testSearchCountries();
        testSearchCountriesSorted();
        testAddCountry();
        
        testGetCountryHql();
        testGetCountryNative();

    }

    private static void testGetAllCountries() {

        LOGGER.info("Start - Get All Countries");

        List<Country> countries = countryService.getAllCountries();

        LOGGER.debug("Countries={}", countries);

        LOGGER.info("End");

    }

    private static void testGetCountry() {

        LOGGER.info("Start - Get Country");

        Country country = countryService.getCountry("IN");

        LOGGER.debug("Country={}", country);

        LOGGER.info("End");

    }
    
    private static void testSearchCountries() {

        LOGGER.info("Start - Search Countries");

        List<Country> countries = countryService.searchCountries("Uni");

        LOGGER.debug("Countries={}", countries);

        LOGGER.info("End");

    }
    
    private static void testAddCountry() {

        LOGGER.info("Start - Add Country");

        Country country = new Country();
        country.setCode("JP");
        country.setName("Japan");

        countryService.addCountry(country);

        LOGGER.info("Country Added Successfully");

        LOGGER.info("End");
    }

    private static void testSearchCountriesSorted() {

        LOGGER.info("Start - Search Countries Sorted");

        List<Country> countries =
                countryService.searchCountriesSorted("ou");

        LOGGER.debug("Countries={}", countries);

        LOGGER.info("End");

    }
    
    
    private static void testGetCountryHql() {

        LOGGER.info("Start - HQL Query");

        Country country = countryService.getCountryHql("IN");

        LOGGER.debug("Country={}", country);

        LOGGER.info("End");
    }
    
    private static void testGetCountryNative() {

        LOGGER.info("Start - Native Query");

        Country country = countryService.getCountryNative("US");

        LOGGER.debug("Country={}", country);

        LOGGER.info("End");
    }
}