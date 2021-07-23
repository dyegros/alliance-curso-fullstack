# Curso de desenvolvimento Web Fullstack NodeJS + Vue.js

by Diego Yegros - Alliance

## Sumário

- [Curso de desenvolvimento Web Fullstack NodeJS + Vue.js](#curso-de-desenvolvimento-web-fullstack-nodejs--vuejs)
  - [Sumário](#sum%c3%a1rio)
  - [Agenda](#agenda)
  - [Leitura exigida](#leitura-exigida)
  - [Leitura recomendada](#leitura-recomendada)
  - [Programa](#programa)
    - [Introdução](#introdu%c3%a7%c3%a3o)
    - [Aplicativos da Web: o que são? Como vivem? Do que se alimentam?](#aplicativos-da-web-o-que-s%c3%a3o-como-vivem-do-que-se-alimentam)
    - [Backend vs. Frontend](#backend-vs-frontend)
    - [Preparando o ambiente](#preparando-o-ambiente)
    - [Backend](#backend)
      - [Chega de papo: primeiro programa](#chega-de-papo-primeiro-programa)
      - [Non-blocking IO](#non-blocking-io)
      - [Callbacks, Promises e async/await](#callbacks-promises-e-asyncawait)
      - [Requisições HTTP: verbos, return codes, mime types, etc](#requisi%c3%a7%c3%b5es-http-verbos-return-codes-mime-types-etc)
      - [Organização REST](#organiza%c3%a7%c3%a3o-rest)
    - [Frontend](#frontend)
      - [O velho e bom (pelo menos era) AJAX](#o-velho-e-bom-pelo-menos-era-ajax)
      - [AngularJS vs. React vs. Vue.Js](#angularjs-vs-react-vs-vuejs)
      - [Transformando nosso pobre frontend em uma Vue.js SPA](#transformando-nosso-pobre-frontend-em-uma-vuejs-spa)
      - [Data biding](#data-biding)
      - [Rotas de frontend](#rotas-de-frontend)
    - [Fullstack](#fullstack)
      - [Meu primeiro CRUD](#meu-primeiro-crud)
        - [Modelo de dados](#modelo-de-dados)
        - [SQL (select, insert, update e delete)](#sql-select-insert-update-e-delete)
        - [Servidor stateless](#servidor-stateless)
        - [Juntando tudo](#juntando-tudo)

## Agenda

- Pré-curso  
  - Cria uma conta sua no [GitHub](https://github.com/join?source=header-home) (se ainda não tiver uma). É de graça! ;-)

  - Leia a [Leitura exigida](#leitura_exigida) do curso


## Leitura exigida

- [Introdução ao Javascript](https://www.devmedia.com.br/introducao-ao-javascript/25548)

- [Javascript Tutorial](https://www.devmedia.com.br/javascript-tutorial/37257)

- [Introdução ao ECMAScript 6](https://mediumcom/thdesenvolvedores/uma-introdu%C3%A7%C3%A3o-a-ecmascript-6-c6b9b1305a59)

- [Introdução a HTML e CSS](https://www.caelum.com.br/apostila-html-css-javascript/introducao-a-html-e-css/#exibindo-informaes-na-web)

- [HTML semântico e posicionamento no CSS](https://www.caelum.com.br/apostila-html-css-javascript/html-semantico-e-posicionamento-no-css/)

- [Mais HTML e CSS](https://www.caelum.com.br/apostila-html-css-javascript/mais-html-e-css/)

- [Introdução ao GIT](https://medium.com/@rafaelvicio/introdu%C3%A7%C3%A3o-a-git-5ae36c303850)

- [Introdução ao NPM](http://nodebr.com/o-que-e-a-npm-do-nodejs/)

## Leitura recomendada

- [Primeiros passos no Node.JS](https://arquiteturasistemas.wordpress.com/2016/03/11/primeiros-passos-no-node-js/)
- [Como estruturar uma aplicação em Node.JS](https://vizir.com.br/2016/06/como-estruturar-uma-aplicacao-node-js/)
- [O Que é AJAX e Como Funciona?](https://www.hostinger.com.br/tutoriais/o-que-e-ajax/)
- [Introdução Express/Node](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introdu%C3%A7%C3%A3o)
- [O que é non-blocking I/O?](https://pt.stackoverflow.com/questions/185666/o-que-%C3%A9-non-blocking-i-o)
- [Paralelismo e Simultaneidade](https://pt.stackoverflow.com/questions/166032/paralelismo-e-simultaneidade)
- [Qual a diferença entre comunicação assíncrona e síncrona?](https://pt.stackoverflow.com/questions/51268/qual-a-diferen%c3%a7a-entre-comunica%c3%a7%c3%a3o-ass%c3%adncrona-e-s%c3%adncrona)

- [Comparação Vue.js com outras Frameworks](https://br.vuejs.org/v2/guide/comparison.html)
- [Vue.js - Introdução](https://br.vuejs.org/v2/guide/index.html)
- [Vue.js - Dados Computados e Observadores](https://br.vuejs.org/v2/guide/syntax.html)
- [Vue.js - Introdução](https://br.vuejs.org/v2/guide/index.html)
- [Vue.js - Introdução](https://br.vuejs.org/v2/guide/index.html)
- [PostgreSQL Tutorial](https://www.devmedia.com.br/postgresql-tutorial/33025)

- [API Rest e os verbos HTTP](https://blog.mbeck.com.br/api-rest-e-os-verbos-http-46e189085e21)
- [Guia completo de SQL](https://www.devmedia.com.br/guia/guia-completo-de-sql/38314)

## Programa

### Introdução

Bem-vindo ao curso da Alliance Consultoria para desenvolvedores Fullstack.

A finalidade do curso é ensinar a você os fundamentos necessários para um desenvolvedor Web capaz de criar um aplicativo Web em seus dois principais aspectos: a interface com usuário utilizando HTML5 e CSS, além de interatividade com elementos de entrada e saídas de dados; e o serviço de armazenamento de dados bem como a exposição de serviços REST.

O curso será aplicado por 4 dias e no quinto e último dia você irá realizar uma atividade para aplicar tudo aquilo que aprendeu durante as aulas. Para alguns dos participantes poderá ser oferecida uma vaga para trabalhar junto com o time da Alliance.

Cada participante terá seu próprio ambiente de desenvolvimento e o processo de avaliação é contínuo (não apenas no último dia), mas isto não significa que você não deva conversar e trocar informações com seus colegas de curso. Na verdade, um dos critérios de avaliação é justamente o trabalho em equipe, ou seja, ajudar seus colegas na verdade também ajuda (e muito) você.

Preste atenção ao nosso tópico de [Leitura Recomendada](#leitura-recomendada) e principalmente ao de [Leitura Exigida](#leitura-exigida). O curso é abrangente, mas nós não queremos perder tempo explicando o que é documento HTML5 ou uma classe CSS. Além disso você precisa entender o que um código Javascript faz, então a leitura exigida vai permitir à você aproveitar muito melhor o curso.

Você deverá (e será orientado de como fazer) um [fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo) do nosso repositório de esqueleto e informar ao instrutor o endereço do seu repositório. Você precisará fazer ao menos um commit por dia para que seu progresso possa ser acompanhado (nós também ajudaremos você com isso).

Nós recomendamos fortemente que suas anotações de curso sejam feitos em um arquivo chamado REAMDE.md que ficará no seu repositório (este é um arquivo no formato Markdown, que é bem produtivo, para você ter uma ideia, todo o conteúdo deste curso é escrito desta forma. Se quiser aprender mais, leia este [material](https://blog.da2k.com.br/2015/02/08/aprenda-markdown/)). Isto permitirá ao instrutor coletar as principais dúvidas e também avaliar o progresso do seu aprendizado. Para nós da Alliance, mais do que simplesmente saber como fazer o importante é mostrar que você é capaz de aprender o que precisa ser feito. Em sua vida como desenvolvedor haverá muitos mais vezes em que você precisa aprender algo novo do que simplesmente fazer novamente algo que você já fez. Aliás, o bom programador em geral é preguiçoso, no bom sentido, ele sempre vai procurar se alguém já fez algo e irá utilizar a mesma solução do que criar uma alternativa totalmente nova.

### Aplicativos da Web: o que são? Como vivem? Do que se alimentam?

Há muito tempo atrás, mas nesta mesma galáxia, a Internet, que nasceu como Arpanet, uma rede do Departamento de Defesa dos Estados Unidos da América, no longínquo ano de 1969, caiu nas mãos dos mortais (nós) e passou a fazer parte do nosso dia-a-dia, tornando-se uma tecnologia transparente.

Mas isto não foi um processo rápido (pelo menos não em termos de uma geração humana). A internet nasceu como uma simples infraestrutura de conectividade, os protocolos que conhecemos e trabalhamos hoje (como o HTTP) demoram anos (alguns, décadas) para serem criados.

Até meados da década de noventa, quase todo o conteúdo que existia na Internet era estático. Isso quer dizer que era tudo praticamente *somente-leitura*. A internet era uma grande (gigantesca) biblioteca, mas o usuário só podia ler o que outros fizeram. As interações eram muito limitadas, quando existia algum tipo de interação.

E na verdade isto era o esperado. A arquitetura da internet era esta: sites construídos para que os outros pudessem ler aquilo que você queria transmitir.

Temos que lembrar que além da função que as forças armadas viam na Internet, os primeiros *hard users* da Internet eram da comunidade acadêmica. Neste tipo de interação, artigos científicos são publicados e disponibilizados para a comunidade. Se você tem algo dizer sobre o tema (concordando ou discordando), você escreve um outro artigo citando o primeiro. Na comunidade científica é assim até hoje. As reações não são rápidas, não dá para refutar uma teoria em um comentário, você precisa de disciplina e pesquisa para contra argumentar.

No entanto, para o uso comercial da Internet isto é muito lento. As empresas demoraram um tempo para entender o que fazer com a Internet (e como ganhar dinheiro com ela). No princípio, foi a era dos sites instituicionais e catálogos de produtos, ou seja, você tinha um site cujo a função principal era mostrar quem você (empresa) era, que produtos (ou serviços) você oferecia e, o principal, qual era o telefone ou o endereço físico da loja onde você poderia comprar os produtos. A Internet era uma grande, bonita e cara lista telefônica (mais precisamente as páginas amarelas).

Além disso, achar algo na Internet era um pesadelo. Antes do Google, você precisa consultar os diretórios (para quem não sabe inglês, este é um termo utilizado para lista telefônica). Ou seja, era a lista telefônica das listas telefônicas, por que os sites era basicamente só conteúdo estático.

Isto não quer dizer que não dava para utilizar a Internet comercialmente. A [Wikipedia](https://en.wikipedia.org/wiki/E-commerce) nos diz que o primeiro e-comerce utilizando a Arpanet acontenceu 1971 (ou 1972) quando estudantes do MIT trocaram mensagens para comprar maconha um dos outros. Se a Internet era uma grande biblioteca, não é nada extraodinário que o primeiro site com alguma relevância fosse o www.books.com, onde você conseguia comprar livros com seu cartão de crédito.

Em meados dos anos 90, os sites se tornavam cada vez mais interativos. A palavra de ordem era criar formulários para que as pessoas enviassem informações para o servidor. Estas informações eram então processadas e uma nova versão da página era criada, contendo o resultado da interação, e assim a comunicação bi-lateral era estabelecida.

Do lado do desenvolvimento, programadores se degladiavam com uma miríade de possibilidades de servidores web (com linguagens distintas) para tratar estes primeiros aplicativos Web. É a era do [CGI](https://pt.wikipedia.org/wiki/CGI).

Vamos entender como isto funcionava.

Veja o HTML (simplificado) abaixo:

```html
<!DOCTYPE html>

<html>
  <head>
    <title>Calculadora inútil</title>
  </head>
  <body>
    <form action="http://localhost:30080/calcular" method="POST">
      <p>
        <label for="primeiro_operando">Primeiro operando</label>
        <input name="primeiro_operando">
      </p>
      <p>
        <label for="segundo_operando">Segundo operando</label>
        <input name="segundo_operando">
      </p>
      <p>
        <label for="operador">Operador</label>
        <select name="operador">
          <option value="add">+</option>
          <option value="minus">-</option>
          <option value="mult">*</option>
          <option value="div">/</option>
        </select>
      </p>
      <p>
        <input type="submit" value="Calcular">
      </p>
    </form>
  </body>
</html>
```

Se você perceber nós não temos nenhum tipo de programação aqui. Lembre-se que HTML é um formato de conteúdo (como o Word ou PDF). Sua função é tornar um conteúdo **bonito**. Neste caso específico, ele ainda tem algumas funções de formulário.

Lembra daqueles formulários no consultório médico, ou mesmo nas entrevistas de emprego. São apenas documentos com lacunas para que informações sejam preenchidas. O código HTML acima é apenas um formulário digital, mas sua função é a mesma dos formulários em papel, ou seja, um texto com lacunas para que outra pessoa complete os dados.

A única coisa que faz referência para uma fonte externa é o atributo *action*, que aponta para um endereço de um servidor (neste caso é o localhost, sua máquina, mas poderia ser qualquer endereço na Internet).

Vejamos então o backend para este código:

```perl
#!/usr/bin/perl
use strict;
use warnings;
use CGI;

$cgi = CGI->new;
$val1 = $cgi->param(`primeiro_operando`)
$val2 = $cgi->param(`segundo_operando`)
$op = $cgi->param(`operador`)
if ($op eq "add") {
  $val1+=$val2;
} elsif ($op eq "minus") {
  $val1-=$val2;
} elsif ($op eq "mult") {
  $val1*=$val2;
} elsif ($op eq "div") {
  $val1/=$val2;
}

# Saída
print "Content-Type: text/html\n\n";
print "<html><body>\n";
print "<b>Resultado:</b><br/>\n";
print "<p>$val1</p>\n"
print "</body>\n"
print "</html>\n"
```

Este backend está em Perl porque esta é uma das linguagens mais utilizadas naquela época. É uma linguagem difícil mas dá para entender mais ou menos o que está acontecendo.

O programa começa com uma série de *use* que servem para importar outras bibliotecas e para definir algumas opções de execução. Depois começa o código de verdade, com uma variável $cgi sendo inicializada com um CGI->new (não vamos entrar em detalhes mas basicamente isto é apenas para inicializar a biblioteca CGI).

Depois temos uma outra variavél que recebe o valor do parâmetro *primeiro_operando*, ou seja, que foi enviado do formulário HTML que mostramos antes. Depois tem uma série de *IFs* para identificar se devemos somar, subtrair, multiplicar ou dividir o primeiro operando com o segundo.

Por fim, vem uma parte estranha, uma série de comandos *print*, que mesmo não conhecendo a linguagem podemos entender o que faz. Os comandos de impressão estão escrevendo o que parece ser um outro documento HTML. Mas o *print* imprime onde ?

Se você conhece um pouco de Linux, vai reconhecer a primeira linha do programa que eu pulei deliberadamente. O *comentário* `#!/usr/bin/perl` serve para dizer ao Linux (ou qualquer sistema baseado no Unix) qual o interpretador que deve ser utilizado para um arquivo executável de script.

O que está acontecendo por trás dos panos é que um servidor Web (como o Apache) recebe uma requisição HTTP em um endereço e direciona os dados de entrada da requisição em um formato padrão (o tal do CGI) para um script executável. A saída do script que normalmente seria escrita na tela é desviada para o socket de saída da conexão HTTP. Ou seja, você faz um programa que escreve o HTML na *tela* mas na verdade este texto é enviado ao cliente que fez a requisição.

Você que já utilizou um monte de sites legais, vai olhar isto e dizer: "Mas que porcaria!. Eu fiz a conta e agora estou em outra página que só tem o resultado (que números eu coloquei mesmo? Era adição ou multiplicação? Se eu quiser que fazer outra conta o que eu faço? Clico em voltar?)"

A primeira coisa que o usuário percebe é que ele foi levado para uma nova página. Muitas vezes nós não queremos isto, queremos que haja continuidade nas interações do usuário. Então como era feito para parecer que só o resultado tinha sido calculado: nós roubávamos. Veja uma versão "melhorada" do backend:

```perl
#!/usr/bin/perl
use strict;
use warnings;
use CGI;

$cgi = CGI->new;
$val1 = $cgi->param(`primeiro_operando`)
$res = $val1
$val2 = $cgi->param(`segundo_operando`)
$op = $cgi->param(`operador`)
if ($op eq "add") {
  $res+=$val2;
} elsif ($op eq "minus") {
  $res-=$val2;
} elsif ($op eq "mult") {
  $res*=$val2;
} elsif ($op eq "div") {
  $res/=$val2;
}

# Saída
print "Content-Type: text/html\n\n";
print "<!DOCTYPE html>\n"
print "<html>\n"
print "<head>\n"
print "<title>Calculadora inútil</title>\n"
print "</head>\n"
print "<body>\n"
print "<form action='http://localhost:30080/calcular' method="POST">\n"
print "<p>\n"
print "<label for='primeiro_operando'>Primeiro operando</label>\n"
print "<input name='primeiro_operando' value='$val1'>\n"
print "</p>\n"
print "<p>\n"
print "<label for='segundo_operando' value='$val2'>Segundo operando</label>\n"
print "<input name='segundo_operando'>\n"
print "</p>\n"
print "<p>\n"
print "<label for='operador'>Operador</label>\n"
print "<select name='operador'>\n"
print "<option value='add'>+</option>\n"
print "<option value='minus'>-</option>\n"
print "<option value='mult'>*</option>\n"
print "<option value='div'>/</option>\n"
print "</select>\n"
print "</p>\n"
print "<p>\n"
print "<input type='submit' value='Calcular'>\n"
print "</p>\n"
print "</form>\n"
print "<p>Resultado: $res</p>"
print "</body>\n"
print "</html>\n"
```

A saída agora é bem diferente da primeira versão. Basicamente o resultado é o mesmo HTML original, mas com alguns valores já preenchidos e com uma nova seção  (abaixo do botão calcular) com o resultado da conta.

Para o usuário, a página pisca mas a única diferença é que ele consegue perceber é que agora há uma nova informação no final da página, que é o resultado do cálculo.

Esta abordagem funciona mas tem seus problemas. Primeiro, a cada comunicação com o servidor a página inteira é recarregada. Quando há uma barra de rolagem, por exemplo, a posição da tela é perdida (a menos que o programador faça tratamentos para impedir isto). A coisa fica pouco fluída e a experiência do usuário fica muito prejudicada.

Para quem já conhece um pouco do Javascript pensa: "Mas um programa assim não existe no mundo real, quer fazer uma calculadora faz no Javascript no Browser não precisa mandar uma requisição para o servidor". É verdade, mas este é apenas um exemplo, substitua esta interação por uma busca pelo CEP, por exemplo, e você verá que não tem como fugir de fazer uma requisção ao servidor.

Durante vários anos todas as páginas funcionavam desta forma (ou parecida). Esta é a forma original para qual o PHP ou ASP foram feitas para tratar. Alguns até evoluiram para tratar melhor esta questão como o famigerado [viewstate](https://www.devmedia.com.br/desvendando-asp-net-postback/29197) do ASP.NET.

### Backend vs. Frontend

### Preparando o ambiente

### Backend

#### Chega de papo: primeiro programa

#### Non-blocking IO

#### Callbacks, Promises e async/await

#### Requisições HTTP: verbos, return codes, mime types, etc

#### Organização REST

### Frontend

#### O velho e bom (pelo menos era) AJAX

#### AngularJS vs. React vs. Vue.Js

#### Transformando nosso pobre frontend em uma Vue.js SPA

#### Data biding

#### Rotas de frontend

### Fullstack

#### Meu primeiro CRUD

##### Modelo de dados

##### SQL (select, insert, update e delete)

##### Servidor stateless

##### Juntando tudo
