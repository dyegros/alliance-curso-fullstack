# Dia 2
Conectando no banco de dados

## Pré
- Confirme se o PostgreSQL esta instalando em seu ambiente
- Tenha em mãos os dados de conexão com o banco (porta, senha)

## Preparando o banco de dados
- Crie um novo banco de dados no PostgreSQL (loja)

``` sql
CREATE DATABASE loja
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```

- Crie uma tabela para os produtos
``` sql
-- Table: public.produtos

-- DROP TABLE public.produtos;

CREATE TABLE public.produtos
(
    codigo integer NOT NULL,
    descricao character varying(80) COLLATE pg_catalog."default" NOT NULL,
    quantidade integer,
    CONSTRAINT produtos_pkey PRIMARY KEY (codigo)
)

TABLESPACE pg_default;

ALTER TABLE public.produtos
    OWNER to postgres;

COMMENT ON TABLE public.produtos
    IS 'Produtos disponiveis';
```

## Adiconando suporte ao PostgreSQL

- Importe a biblioteca de conexão com o banco
```
npm install pg --save
```

- Importe a classe Pool e configure a conexão com BD

- Substitua a lógica das rotas para não usar mais a lista em memória, acessando direto o banco de dados

## Referencia

- Chamando um comando com parametros
``` javascript
const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
const values = ['brianc', 'brian.m.carlson@gmail.com']
const res = await client.query(text, values)
console.log(res.rows[0])
```

- Comandos SQL
``` sql
INSERT INTO [tabela]([campos], ...) VALUES (valores, ...)
UPDATE [tabela] SET [campos1]=valor1, ... WHERE [campo_chave] = valor_chave
DELETE FROM [tabela] WHERE [campo_chave] = valor_chave
```

Tipos primitivos
integer, string, bool

var i = 10, nome = "Diego"

Tipo arrays (listas)
var lista = ["banana", "maca", "amora", 1, 2, 5]

Tipos dicionário
var usuario = {
    codigo: 10,
    nome: "Diego",
    email: "dyegros@allianceconsultoria.com.br"
}

## Dia 4

- Criar uma nova tabela para guardar os dados de usuário:
    - Codigo (numérico)
    - Nome (varchar 60)
    - Login (varchar 30)
    - E-mail (varchar 100)

- Criar backend para o CRUD de usuários. 

- Criar frontend para listar, incluir, editar e excluir usuários
