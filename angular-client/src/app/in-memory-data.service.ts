import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Receita } from './receita';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const receitas = [
      {
        id: 16,
        nome: 'Bolo de cenoura',
        porcoes: 0,
        calorias: 333,
        ingrediente: [
          '3 cenouras médias raspadas e picadas',
          '3 ovos',
          '1 xícara de óleo',
          '2 xícaras de açúcar',
          '2 xícaras de farinha de trigo',
          '1 colher (sopa) de fermento em pó',
          '1 pitada de sal'
        ],
        modoPreparo: 'Bater no liquidificador todos os ingredientes, ' +
          'acrescentando a farinha aos poucos'
      },
      {
        id: 17,
        nome: 'Bolinho de chuva',
        porcoes: 15,
        calorias: 0,
        ingrediente: [
          '2 xícaras de chá de farinho de trigo',
          '1 ovo (grande)',
          '2 colheres de sopa de açúcar',
          '1 colher pequena de fermento em pó',
          '1/2 copo de leite',
          'Canela em pó'
        ],
        modoPreparo: '(1) Coloque em um recipiente o açúcar, o ovo inteiro, o ' +
          'trigo e o leite.\n(2) Bata até obter uma massa homogênea.\n' +
          '(3) Frite e polvilhe com açúcar e canela.'
      },
      {
        id: 18,
        nome: 'Chicabon caseiro',
        porcoes: 4,
        calorias: 0,
        ingrediente: [
          '2 xícaras de leite',
          '200 g de creme de leite',
          '5 colheres (sopa) de chocolate em pó',
          '1 xícara de doce de leite'
        ],
        modoPreparo: '(1) Bata os ingredientes no liquidificador.\n(2) Coloque a ' +
          'mistura homogênea nas forminhas de picolé.\n(3) Leve ao freezer por 6 ' +
          'horas.'
      },
      {
        id: 19,
        nome: 'Pavê de bis',
        porcoes: 8,
        calorias: 0,
        ingrediente: [
          '1 lata de leite condensado',
          '1 litro de leite',
          '4 colheres (sopa) de amido de milho',
          '2 ovos separados',
          '2 caixas de chocolate Bis picado',
          '1 xícara de açúcar',
          '1 lata de creme de leite'
        ],
        modoPreparo: '(1) Misture o leite condensado, o leite, a maisena, as ' +
          'gemas e leve ao fogo.\n(2)Mexa sempre até engrossar e reserve.\n(3) ' +
          'Forre o fundo de uma forma refratária grande com metade do creme.\n' +
          '(4) Forme uma camada com o chocolate picado e complete com o ' +
          'restante do creme.\n(5) Bata as claras em neve e acrescente o açúcar, ' +
          'aos poucos, batendo sempre, até obter um suspiro firme.\n(6) Junte o ' +
          'creme de leite e mexa bem.\n(8) Coloque essa mistura por cima do ' +
          'creme e leve à geladeira até a hora de servir.'
      }
    ];
    return {receitas};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(receitas: Receita[]): number {
    return receitas.length > 0 ? Math.max(...receitas.map(receita => receita.id)) + 1 : 11;
  }
}
