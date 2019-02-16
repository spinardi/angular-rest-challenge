package com.backend.h2.Server;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReceitaService {

    @Autowired
    ReceitaRepository receitaRepository;

    public List<Receita> getAllReceitas() {
        return receitaRepository.findAll();
    }

    public Receita getReceitaById(int id) {
        return receitaRepository.findById(id).get();
    }

    public void saveOrUpdate(Receita receita) {
        receitaRepository.save(receita);
    }

    public void saveIngrediente(int id, List<String> ingrediente) {
        Receita receita = receitaRepository.findById(id).get();
        List<String> ingList = receita.getIngrediente();
        ingrediente.forEach(i -> ingList.add(i));
        receita.setIngrediente(ingList);
        saveOrUpdate(receita);
    }

    public void saveModoPreparo(int id, String sModoPreparo) {
        Receita receita = receitaRepository.findById(id).get();
        receita.setModoPreparo(sModoPreparo);
        saveOrUpdate(receita);
    }
}
