package com.tourofheroes.h2.SpringBootTourOfHeroes;

import com.tourofheroes.h2.SpringBootTourOfHeroes.HeroRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HeroService {

    @Autowired
    HeroRepository heroRepository;

    public List<Hero> getAllHeroes() {
        List<Hero> heroes = new ArrayList<Hero>();
        heroRepository.findAll().forEach(hero -> heroes.add(hero));
        return heroes;
    }

    public List<Hero> getHeroesByName(String name) {
        List<Hero> heroes = new ArrayList<Hero>();
        heroRepository.findHeroesByName(name).forEach(hero -> heroes.add(hero));
        return heroes;
    }

    public Hero getHeroById(int id) {
        return heroRepository.findById(id).get();
    }

    public void saveOrUpdate(Hero Hero) {
        heroRepository.save(Hero);
    }

    public void delete(int id) {
        heroRepository.deleteById(id);
    }
}
