package com.tourofheroes.h2.SpringBootTourOfHeroes;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface HeroRepository extends JpaRepository<Hero, Integer> {

    List<Hero> findHeroesByName(@Param("name") String name);
}
