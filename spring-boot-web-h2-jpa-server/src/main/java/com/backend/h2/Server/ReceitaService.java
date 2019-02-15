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

    public Receita getReceitaById(int iID) {
        return receitaRepository.findById(iID).get();
    }

    public void saveOrUpdate(Receita receita) {
        receitaRepository.save(receita);
    }

    public void saveIngrediente(int iID, List<String> ingrediente) {
        Receita receita = receitaRepository.findById(iID).get();
        receita.setIngrediente(ingrediente);
        saveOrUpdate(receita);
    }

    public void saveModoPreparo(int iID, String sModoPreparo) {
        Receita receita = receitaRepository.findById(iID).get();
        receita.setModoPreparo(sModoPreparo);
        saveOrUpdate(receita);
    }
}
