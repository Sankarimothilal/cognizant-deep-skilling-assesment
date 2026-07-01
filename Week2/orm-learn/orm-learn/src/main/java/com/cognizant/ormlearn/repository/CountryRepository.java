package com.cognizant.ormlearn.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String>{
	Country findByCode(String code);
	
	List<Country> findByNameContainingIgnoreCase(String name);

	List<Country> findByNameContainingIgnoreCaseOrderByNameAsc(String name);
	
	
	
	@Query("FROM Country c WHERE c.code = :code")
	Country getCountry(@Param("code") String code);
	
	@Query(value = "SELECT * FROM country WHERE co_code = :code", nativeQuery = true)
	Country getCountryNative(@Param("code") String code);
}
