package com.backend.h2.Server;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReceitaController {

    @Autowired
    ReceitaService receitaService;

    @GetMapping("/api/receitas")
    private List<Receita> getAllReceitas() {
        return receitaService.getAllReceitas();
    }

    @GetMapping("/api/receita/{id}")
    private Receita getReceita(@PathVariable("id") int id) {
        return receitaService.getReceitaById(id);
    }

    @PostMapping("/api/receita")
    private Receita saveReceita(@RequestBody Receita receita) {
        receitaService.saveOrUpdate(receita);
        return receita;
    }

    @PostMapping("/api/receita/{id}/ingredientes")
    private Boolean saveIngrediente(
        @PathVariable("id") int id,
        @RequestBody List<String> ingrediente
    ) {
        receitaService.saveIngrediente(id, ingrediente);
        return true;
    }

    @PostMapping("/api/receita/{id}/modopreparo")
    private Boolean saveModoPreparo(
        @PathVariable("id") int id,
        @RequestBody String modoPreparo
    ) {
        receitaService.saveModoPreparo(id, modoPreparo);
        return true;
    }
}
