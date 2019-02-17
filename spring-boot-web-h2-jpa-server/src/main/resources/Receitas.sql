CREATE TABLE RECEITA (
    ID SERIAL NOT NULL,
    PRIMARY KEY(ID),

    NOME VARCHAR(255),
    CALORIAS INTEGER,
    PORCOES INTEGER,
    MODO_PREPARO VARCHAR(1020),
);

CREATE TABLE INGREDIENTE(
    ID SERIAL NOT NULL,
    FOREIGN KEY(ID) REFERENCES RECEITA(ID),

    NOME VARCHAR(255) NOT NULL,
);

INSERT INTO RECEITA VALUES (11, 'Bolinho de chuva', 66, 15, '(1) Coloque em um recipiente o açúcar, o ovo inteiro, o trigo e o leite.\n(2) Bata até obter uma massa homogênea.\n(3) Frite e polvilhe com açúcar e canela.');
INSERT INTO INGREDIENTE VALUES (11, '2 xícaras de chá de farinho de trigo');
INSERT INTO INGREDIENTE VALUES (11, '1 ovo (grande)');
INSERT INTO INGREDIENTE VALUES (11, '2 colheres de sopa de açúcar');
INSERT INTO INGREDIENTE VALUES (11, '1 colher pequena de fermento em pó');
INSERT INTO INGREDIENTE VALUES (11, '1/2 copo de leite');
INSERT INTO INGREDIENTE VALUES (11, 'Canela em pó');

INSERT INTO RECEITA VALUES (12, 'Bolo de cenoura', 333, 16, 'Bater no liquidificador todos os ingredientes, acrescentando a farinha aos poucos');
INSERT INTO INGREDIENTE VALUES (12, '3 ovos');
INSERT INTO INGREDIENTE VALUES (12, '3 cenouras médias raspadas e picadas');
INSERT INTO INGREDIENTE VALUES (12, '1 xícara de óleo');
INSERT INTO INGREDIENTE VALUES (12, '2 xícaras de açúcar');
INSERT INTO INGREDIENTE VALUES (12, '2 xícaras de farinha de trigo');
INSERT INTO INGREDIENTE VALUES (12, '1 colher (sopa) de fermento em pó');
INSERT INTO INGREDIENTE VALUES (12, '1 pitada de sal');

INSERT INTO RECEITA VALUES (13, 'Chicabon caseiro', 426, 4, '(1) Bata os ingredientes no liquidificador.\n(2) Coloque a mistura homogênea nas forminhas de picolé.\n(3) Leve ao freezer por 6 horas.');
INSERT INTO INGREDIENTE VALUES (13, '2 xícaras de leite');
INSERT INTO INGREDIENTE VALUES (13, '200g de creme de leite');
INSERT INTO INGREDIENTE VALUES (13, '5 colheres (sopa) de chocolate em pó');
INSERT INTO INGREDIENTE VALUES (13, '1 xícara de doce de leite');

INSERT INTO RECEITA VALUES (14, 'Pavê de bis', 456, 8, '(1) Misture o leite condensado, o leite, a maisena, as gemas e leve ao fogo.\n(2)Mexa sempre até engrossar e reserve.\n(3) Forre o fundo de uma forma refratária grande com metade do creme.\n(4) Forme uma camada com o chocolate picado e complete com o restante do creme.\n(5) Bata as claras em neve e acrescente o açúcar, aos poucos, batendo sempre, até obter um suspiro firme.\n(6) Junte o creme de leite e mexa bem.\n(8) Coloque essa mistura por cima do creme e leve à geladeira até a hora de servir.');
INSERT INTO INGREDIENTE VALUES (14, '1 lata de leite condensado');
INSERT INTO INGREDIENTE VALUES (14, '1 litro de leite');
INSERT INTO INGREDIENTE VALUES (14, '4 colheres (sopa) de amido de milho');
INSERT INTO INGREDIENTE VALUES (14, '2 ovos separados');
INSERT INTO INGREDIENTE VALUES (14, '2 caixas de chocolate Bis picado');
INSERT INTO INGREDIENTE VALUES (14, '1 xícara de açúcar');
INSERT INTO INGREDIENTE VALUES (14, '1 lata de creme de leite');

SELECT * FROM RECEITA;
SELECT * FROM INGREDIENTE;
