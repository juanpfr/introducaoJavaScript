# introducaoJavaScript

Introdução JS

    Aula 1 - 13/11/2024

        1 - Alteração local pelo console do navegador

            Comandos usados:

                // Alteração de css
                document.querySelector('elemento').style.qualquercoisadocss = 'valor'

                // Alteração do valor do texto dentro de uma chave HTML, exemplo <h1>valor</h1>
                document.querySelector('elemento').innerText = 'valor'

        2 - Tipos de dados

            number - Qualquer tipo de número.

            string - Contagem de caracteres. (Normalmente dentro de "" ou '').

        3 - Comando para saber o tipo de dado

            typeof(valor)  <------ Pode ser qualquer coisa aqui dentro, desde uma variável até um número solto
            
            Exemplos typeof:

                typeof(5)
                'number'

                typeof('5')
                'string'

    Aula 2 - 14/11/2024.

        1 - Expressões numéricas.

            + <-- Soma.

            - <-- Subtração.

            * <-- Multiplicação.

            / <-- Divisão.

            ** <- Potência // Exemplo: 2**2 == 4  3**2 == 9 (2 ao quadrado e 3 ao quadrado).

            ( ) < Tem prioridade // Normalmente usado para fazer % Exemplo: (2 + 2) - 2 * 3 <-- primeiro o ().

            = <-- Na programação o "=" significa recebe, no sentido de atribuir valor (idade = 14) // Estou atribuindo valor a variável(variável será explicado melhor o que é mais a frente) idade.

            == <- O "==" é usado como nós normalmente usamos o igual normal // Exemplo: 5 == 5.

            != <- Significa "diferente", ou seja é o oposto de "==".

            > <-- Maior que.

            < <-- Menor que.

            >= <- Maior igual.

            <= <- Menor igual.

            % <-- Resto da divisão // Exemplo 26 % 5 == 1 (5 vezes 5 é 25 e sobra 1, é mais para identificar se é número inteiro ou decimal).

        2 - Novos tipos de dados.

            boolean - Verdadeiro ou falso, V ou F, 0 ou 1, on ou off, ligado ou desligado.

                Exemplo:

                    5 == 5              // 5 é igual a 5?
                    true

                    5 + 5 == 10         // 5 + 5 é igual a 10?  
                    true

                    5 == 9              // 5 é igual a 9?
                    false

                    5 != 5              // 5 é diferente de 5?
                    false

                    10 - 1 != 7 + 2     // 10 - 1 é diferente de 7 + 2?
                    false

        3 - Comandos.

            parseInt(valor)

                Serve para transformar o número para inteiro.

                Exemplo:

                    // Sem.
                    26 / 5
                    5.2

                    // Com.
                    parseInt(26 / 5)
                    5

            window.alert(valor)

                Serve para colocar um pop up de alerta no site.

            window.confirm(valor)

                Acresenta uma mensagem com opções de OK/CANCELAR ao usuário.

            window.prompt(valor)

                Serve para fazer uma incersão de dados.

        4 - Variáveis.

            Variáveis são como caixas que obrigatoriamente recebem um nome e servem para armazenar dados, todos estes que aprendemos acima.

            Pode se criar uma variável utilizando o "var" ou "let" antes do nome da variável (obrigatório).

            O que não fazer:

                Uma variável não pode ter o nome de um comando, exemplo typeof

                Não usar nenhum caractere especial no nome da variável

                Evitar sair do idioma inglês

                Ser o mais especifico possível
                
                Evitar abreviar palavras

                usar snakeCase <-- sempre quando for necessário se colocar mais de um nome na variável, não dar espaço, apenas coloque a letra maíscula na primeira letra da outra palavra, exemplo:

                    var loginName = "Jorel"

            Exemplos para se criar e usar variáveis em variáveis:

                var nome = "Juan"         // Atribuindo o valor (que é uma string) "Juan" para a variável nome. E se repetir o processo ele irá gravar o novo dado.

                Atente-se ao detalhe que o "Juan" está entre "" para que seja identificado como string e não como outra variável.

                E toda vez que no console for colocado a variável nome é como se tivesse escrevendo "Juan", porque este é o valor dela.

                var idade = 14           // Atribuindo o valor (que é um number) 14 para a variável idade.

                Atente-se ao detalhe que o 14 está sem "" para que seja identificado como number e não como string.