Revisão de classes
Vamos criar um sistema de monitoramento de uma nave espacial.
Logo que o sistema é iniciado, ele deve pedir os dados da nave.
Para a nave que for cadastrada, precisamos de:
 Nome:
 Quantidade de tripulantes:
 Os veículos podem ser de batalha ou de transporte.
 Caso seja de batalha: ela também deverá pedir quantas armas a nave tem disponíveis.
 Caso seja de transporte: O número de lugares que ela comporta.
 Além disso, a nave deve ser iniciada com velocidade atual igual a 0.
 Um menu deverá ser aoaresebtadi ao usuário com as opções:
    1- Acelerar nave
    2- Trocar a nave
    3- Imprimir e sair

 *Para acelerar a nave, é necessário pedir a aceleração.
 A velocidade deve aumentar 83% da aceleração passada como parâmetro devido à taxa de desaceleração.
 Para a nossa aplicação, toda aceleração tem uma taxa de desaceleração fixa de 17%;
    Velocidade atual + (aceleração *(1 - taxa de desaceleração))

Outra importante funcionalidade é trocar a nave;
Para troca, todos os dados de cadastro serão solicitados novamente e a nova nave será iniciada com velocidade 0.
Na última opção, precisaremos imprimir a espaçovane e sair.
A impressão deve ser no formato:
    Nome:
    Quantidade de tripulantes:
    velocidade atual:
PS: neste exercício qualquer classe deve ser separada num arquivo a parte, deixando no arquivo principal apenas a inicialização da aplicação e a chamada para as outras classes.
