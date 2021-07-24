var validator = require("validator");
var User = require("../services/User");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");


class UserValidator{
    async newUserValidation(name,email,password){
        if(name == undefined || name.trim() == ""){
            return {
                status: 400,
                err: "nome é invalido!"
            }
        }

        if(email == undefined || !validator.isEmail(email)){
            return {
                status: 400,
                err: "email invalido!"
            }
        }

        var emailExists = await User.findEmail(email);

        if(emailExists){
            return {
                status: 400,
                err: "email já cadastrado!"
            }
        }    

        if(password == undefined || password.trim() == ""){
            return {
                status: 400,
                err: "senha invalida!"
            }
        }

        return {
            status: 200
        }
    }

    async loginValidation(email,password){
        if(!validator.isEmail(email)){
            return {
                status: 400,
                err: "email invalido!"
            }
        }

        if(password == undefined || password.trim() == ""){
            return {
                status: 400,
                err: "senha invalida!"
            }
        }

        var user = await User.findByEmail(email);

        if(user != undefined){

            var resultado = await bcrypt.compare(password,user.password);

            if(resultado){

                var token = jwt.sign({ email: user.email, role: user.role }, process.env.TOKEN_SECRET);

                return{
                    status: 200,
                    token
                }

            }else{
                return{
                    status: 401,
                    err: "Senha incorreta!"
                }
            }

        }else{
            return{
                status: 401,
                err: "Email ou senha incorretos!"
            }

        }

    }

    async IdValidation(id){
        if(!validator.isInt(id)){
            return {
                status: 400,
                err: "ID invalido!"
            }
        } else{
            return {
                status: 200
            }
        }


    }
}

module.exports = new UserValidator();