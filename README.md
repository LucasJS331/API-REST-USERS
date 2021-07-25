# 🤵 API-REST-USERS 🤵

Está é uma API REST utilizada para gestão de usuários cadastrados no banco de dados.

## POST/ auth

Essa EndPoint é responsavel por autenticar o usuário.

### Parametros:

*Email: Email do usuário cadastrado do sistema

*password: Senha do usuário cadastrado do sistema

```
{
    "password": "example123456",
    "email": "example@example.com"
}   
```

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber o token.
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haJwiOiJAbHVjYXMuY29tIiwiaWF0IjoxNjEyMTEwNTg2LCJleHAiOjE2MTIyODMzODZ9.8exL7fMcmShBrthpK15sc9mnU6pVoFOWTvbN6fmTZJg"
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

Essa EndPoint é responsavel por retornar todos os usuários cadastrados 

### Parametros:

Nenhum

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber a listagem de todos os usuários
```
 "users": [
        {
            "id": 12,
            "email": "admin@example.com",
            "role": 0,
            "name": "Lucas"
        },
        {
            "id": 13,
            "email": "example@example.com",
            "role": 1,
            "name": "Carlos"  
        },
        {
            "id": 14,
            "email": "wilson@example.com",
            "role": 0,
            "name": "Wilson"
        }
```
## GET/ user/ID

Essa EndPoint é responsavel por retornar um usuário especifico! 

### Parametros:

Id: é preciso indicar o ID no final da endpoint.

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber os dados do usuário escolhido.
```
{
    "id": 1,
    "email": "adminAcc@exmaple.com",
    "role": 1,
    "name": "Lucas"
}
```
### Bad request! 400

Acontece quando o ID for de um formato invalido.
```
{
    "err": "ID invalido!"
}

```

## POST/ user

Essa EndPoint é responsavel por registrar um novo usuário! 

### Parametros:

*name: nome do usuário

*password: senha do usuário

*email: email do usuário

### Respostas:

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

## PUT/ user/ID

Essa EndPoint é responsavel por editar um usuário! 

### Parametros:
*Id: é preciso indicar o ID do usuário no final da endpoint.

name: novo nome do usuário

password: nova senha do usuário

email: novo email do usuário

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber um sinal de sucesso!
```
{sucesso: "o usuário foi editado com sucesso!"}
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

## DELETE/ user/ID

Essa EndPoint é responsavel por deletar um  usuário! 

### Parametros:

*Id: é preciso indicar o ID do usuário no final da endpoint.


### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber um sinal de sucesso!
```
{sucesso: "o usuário foi editado com sucesso!"}
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







