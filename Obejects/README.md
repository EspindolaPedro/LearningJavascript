Para criarmos objetos em js é como criar váriaveis, porém com mais valores atriuidos a mesma.

*Assim como arrays, também são estruturas de dados
    capazes de armazenar e organizar outros dados

*Dados são organizados através de propriedades

*Associação chave-valor
    Chave é o nome da propriedade
    Valor é o valor que esta propriedade vai receber.

*Também podem armazenar internamente qualquer outro tipo
    Inclusive Arrays e outros objetos
    
*Relembrando:
 Objetos são uma estrutura chave-valor
 Utilizamos objetos quando precisamos mapear propriedades ou atributos
 Arrays são uma estrutura de lista sequencial
 Utilizamos os arrays quando precisamos armazenar uma sequencia de elementos.

*Quando pensamos em objetos, conseguimos enxergar uma representação do mundo real


Praticando objetos
1º Nave deve partir da velocidade 0 km/s
2ºMenu deve ser exibido para o usuário perguntando se ele quer acelerar ou parar a nave.
 *Se ele quiser parar, umas mensagem deve ser exibida com as características da nave (nome e tipo) e em que velocidade ele estava.
 *Se ele quiser acelerar, deve ser exibido um prompt para que ele informe quanto ele quer acelerar e este valor será incrementado na velocidade.
3º Quando a velocidade for incrementada, deve-se fazer uma verificação para ver se a espaçonave está acima da velocidade máxima dela.
    Se ela estiver, uma mensagem deve ser exibida informando a velocidade da nave e a velocidade máxima permitida.

Para resolver este problema precisaremos:
    Exibir um prompt para o nome da nave
    Exibir um prompt para o tipo da nave
    Exibir um prompt para a velocidade máx desta nave
    Exibir um prompt perguntando se o usuário quer acelerar ou para.
    Se ele quiser parar, vamos exibir a mensagem final.
        *Se ele quiser acelerar, precisamos de um prompt para que o usuário informe o quanto quer acelerar.
        *Exibir uma mensagem de alerta quando a velocidade máxima for ultrapassada.
    Criar um objeto para nave.