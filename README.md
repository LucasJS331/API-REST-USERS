# API-REST-USERS
API REST utilizada para fazer gestão de usuários

Está é uma API REST utilizada para gestão de usuários cadastrados no banco de dados.

## POST/ auth

Esse EndPoint é responsavel por autenticar o usuário.

### Parametros

*Email: Email do usuário cadastrado do sistema

*password: Senha do usuário cadastrado do sistema

```
{
    "password": "123456",
    "email": "@example.com"
}   
```

### Respostas

### Ok! 200

Caso esta resposta acontença você ira receber o token.
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJAbHVjYXMuY29tIiwiaWF0IjoxNjEyMTEwNTg2LCJleHAiOjE2MTIyODMzODZ9.8exL7fMcmShBrthpK15sc9mnU6pVoFOWTvbN6fmTZJg"
}
```

### Erro de autentificação! 401

Este erro ocorre com o problema de autentificação do usuário.
```
{
    "err": "usuário ou senha incorretos!"
}

```

## GET/ users

Esse EndPoint é responsavel por retornar todos os usuários cadastrados 

### Parametros

Nenhum

### Respostas

### Ok! 200

Caso esta resposta acontença você ira receber a listagem de todos os usuários
```

```


## GET/ user/ID

Esse EndPoint é responsavel por retornar um usuário especifico! 

### Parametros

Id: é preciso indicar o ID do game no final da endpoint.

### Respostas

### Ok! 200

Caso esta resposta acontença você ira receber os dados do game escolhido.
```

```
### Bad request! 400

Acontece quando o ID for de um formato invalido.
```
{
    "err": "ID invalido!"
}

```

## POST/ user

Esse EndPoint é responsavel por registrar um novo usuário! 

### Parametros

*name: nome do usuário

*password: senha do usuário

*email: email do usuário

### Respostas

### Ok! 200

Caso esta resposta acontença você ira receber um sinal de sucesso!
```
{sucesso: "o usuário foi cadastrado com sucesso!"}
```

### Bad request! 400

Acontece quando um dos parametros for invalido.
```
{
    "err": "parametros invalidos!"
}

```


### Erro de autorização! 401

```
{
    "err": "você precisa estar autenticado!"
}

```

## PUT/ game/ID

Essa EndPoint é responsavel por editar um  game! 

### Parametros
*ID: ID do game selecionado

title: novo titulo do game

year: ano de lançamento do game

price: preço atualizado do game

### Respostas

### Ok! 200

Caso esta resposta acontença você ira receber um sinal de sucesso!
```
{sucesso: "o game foi editado com sucesso!"}
```

### Bad request! 400

Acontece quando ID for invalido.
```
{
    "err": "ID invalido!"
}

```

### Erro de autorização! 401

```
{
    "err": "você precisa estar autenticado!"
}

```

## DELETE/ game/ID

Esse EndPoint é responsavel por deletar um  game! 

### Parametros

*ID: ID do game selecionado

### Respostas

### Ok! 200

Caso esta resposta acontença você ira receber um sinal de sucesso!
```
{sucesso: "o game foi editado com sucesso!"}
```

### Bad request! 400

Acontece quando o ID for invalido.
```
{
    "err": "ID invalido!"
}

```

### Erro de autorização! 401

```
{
    "err": "você precisa estar autenticado!"
}

```

## POST/ user

Esse EndPoint é responsavel por registrar um novo usuário no banco de dados! 

### Parametros

*email: email do usuário

*password: senha do usuário

### Respostas

### Ok! 200

Caso esta resposta acontença você ira receber um sinal de sucesso!
```
{sucesso: "o usuário foi cadastrado com sucesso!"}
```

### Bad request! 400

Acontece quando um dos parametros for invalido.
```
{
    "err": "parametros invalidos!"
}

```

### Erro de autorização! 401

```
{
    "err": "você precisa estar autenticado!"
}

```






