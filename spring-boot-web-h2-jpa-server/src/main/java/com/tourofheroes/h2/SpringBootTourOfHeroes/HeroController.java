
package com.tourofheroes.h2.SpringBootTourOfHeroes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HeroController {

    @Autowired
    HeroService heroService;

    @GetMapping("/api/heroes")
    private List<Hero> getAllHeroes() {
        return heroService.getAllHeroes();
    }

    @GetMapping("/api/heroes/{id}")
    private Hero getHero(@PathVariable("id") Integer id) {
        return heroService.getHeroById(id);
    }

    @GetMapping("/api/heroes/")
    private List<Hero> getHeroesByName(@RequestParam("name") String name) {
        return heroService.getHeroesByName(name);
    }

    @DeleteMapping("/api/heroes/{id}")
    private void deleteHero(@PathVariable("id") Integer id) {
        heroService.delete(id);
    }

    @PostMapping("/api/heroes")
    private Hero saveHero(@RequestBody Hero hero) {
        heroService.saveOrUpdate(hero);
        return hero;
    }

    @PutMapping("/api/heroes")
    private Integer updateHero(@RequestBody Hero hero) {
        heroService.saveOrUpdate(hero);
        return hero.getId();
    }
}
