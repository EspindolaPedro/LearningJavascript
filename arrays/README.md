PRATICANDO ARRAYS
 O código deve estar num arquivo separado e importado numa página HTML
*Temos abaixo, uma array bidimensional de naves que estão engatadas numa estação espacial.
*Para cada sub-array, a primeira posição é o nome da nave, a segunda é a quantidade de tripulantes e a terceira informa se o processo de ngate já foi concluído ou não.
*Nesta lista, a plataforma de engate que a nave está parada é o [índice da nave no array + 1]
 const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet, 5, false],
    ["Elemental", 3, true]
    ["Darwin", 15, false]
 ]
 *Com base neste array, nós queremos:
 1º Filtrar o nome das naves que tem mais de 9 tripulantes
 2º Informar o número da plataforma em que está a primeira nave que aidna está com engate pendente
    utilize a função findIndex, que é bem parecida com o find, mas retorna o índice de um filtro em vez do elemento do array
3º Destacar o nome de todas as naves colocando-as em caixa alta e exibindo
4º Exibir um alerta com todos estas informações.