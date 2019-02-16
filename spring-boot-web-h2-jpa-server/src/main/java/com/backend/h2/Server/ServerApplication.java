package com.backend.h2.Server;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerApplication implements CommandLineRunner {

    @Autowired
    private ReceitaRepository receitaRepository;

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
    }
    
    @Override
    public void run(String... args) throws Exception {
        /* Clean database tables */
        receitaRepository.deleteAll();

        List<String> ingrediente = new ArrayList<String>();
        ingrediente.add("3 cenouras médias raspadas e picadas");
        ingrediente.add("3 ovos");
        ingrediente.add("1 xícara de óleo");
        ingrediente.add("2 xícaras de açúcar");
        ingrediente.add("2 xícaras de farinha de trigo");
        ingrediente.add("1 colher (sopa) de fermento em pó");
        ingrediente.add("1 pitada de sal");

        Receita receita = new Receita(16, "Bolo de cenoura", 333, 0,
            ingrediente, "Bater no liquidificador todos os ingredientes, " +
            "acrescentando a farinha aos poucos");

        /* Insert some data in the database */
        receitaRepository.save(receita);
    }

}
