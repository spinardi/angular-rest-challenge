package com.backend.h2.Server;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

@Entity
public class Receita {

    @Id
    @GeneratedValue
    private Integer id;

    private String nome;
    private Integer calorias;
    private Integer porcoes;

    @ElementCollection
    @CollectionTable(name = "INGREDIENTE", joinColumns = @JoinColumn(name = "ID"))
    @Column(name = "NOME")
    private List<String> ingrediente;

    private String modoPreparo;

    /* Getters and Setters */
    /* ============================== */

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getCalorias() {
        return calorias;
    }

    public void setCalorias(Integer calorias) {
        this.id = calorias;
    }

    public Integer getPorcoes() {
        return porcoes;
    }

    public void setPorcoes(Integer porcoes) {
        this.id = porcoes;
    }

    public List<String> getIngrediente() {
        return ingrediente;
    }

    public void setIngrediente(List<String> ingrediente) {
        this.ingrediente = ingrediente;
    }

    public String getModoPreparo() {
        return this.modoPreparo;
    }

    public void setModoPreparo(String modoPreparo) {
        this.modoPreparo = modoPreparo;
    }

    /* Constructors */
    /* ============================== */

    public Receita() {

    }

    public Receita(Integer id, String nome, Integer porcoes, Integer calorias,
        List<String> ingrediente, String modoPreparo) {
        this.id = id;
        this.nome = nome;
        this.porcoes = porcoes;
        this.calorias = calorias;
        this.ingrediente = ingrediente;
        this.modoPreparo = modoPreparo;
    }
}
