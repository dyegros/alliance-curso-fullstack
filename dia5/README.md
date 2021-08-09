# Avaliação

## Story

Como um consumidor
Eu desejo visualizar as compras realizadas por mim
Assim eu posso ter detalhes dos meus gastos e decidir se estou dentro ou fora dos limites

## Modelo de dados

``` sql
-- DROP TABLE movimentos CASCADE;
-- DROP SEQUENCE movimentos_seq CASCADE;

CREATE SEQUENCE movimentos_seq;

CREATE TABLE movimentos (
    id integer not null default nextval('movimentos_seq'),
    data_mov date not null,
    descricao varchar(80) not null,
    categoria varchar(40) null,
    valor decimal(12,2) not null,
    CONSTRAINT usuarios_pkey PRIMARY KEY (codigo)
);


ALTER SEQUENCE movimentos_seq
OWNED BY movimentos.id;
```

# Categorias 
- esporte
- lazer
- jogos
- contas
- alimentação
- vestuário

## Informações da tela
A lista de movimentos
O total gasto

## Bonus

- Visualizar os gastos por categoria sumarizado
 (veja a cláusula GROUP BY do comando SELECT)
- Saldo acumulado por lançamento
- Visualizar gastos por mês

