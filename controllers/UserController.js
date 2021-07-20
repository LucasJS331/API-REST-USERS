var User = require("../services/User");
var PasswordToken = require("../services/PasswordToken");
const validatorUser = require("../validator/user-validator");
const userValidator = require("../validator/user-validator");


class UserController{
    async findAll(req, res){
        var users = await User.findAll();
        res.json(users);
    }

    async findOne(req, res){
        var id = req.params.id;
        var result = await userValidator.IdValidation(id);
        if(result.status == 200){
            var user = await User.findById(id);
            if(user == undefined){
                res.status(404).json({});
            }else{
                res.status(200).json(user);
            }
        } else{
            res.status(result.status).send(result.err);
        }      
    }

    async create(req, res){
        var {email, name, password} = req.body;
        var result = await validatorUser.newUserValidation(name,email,password);
        if(result.status == 200){
            await User.new(email,password,name);
            res.status(200).send("Usuário cadastrado com sucesso!");
        }else{
            res.status(result.status).send(result.err);
        }
       
    }

    async edit(req, res){
        var {name, role, email} = req.body;
        var {id} = req.params;
        var result = await userValidator.IdValidation(id);
        if(result.status == 200){
            var confirm = await User.update(id,email,name,role);
            if(confirm != undefined){
                if(confirm.status){
                    res.status(200).send("usuario editado com sucesso!");
                }else{
                    res.status(406).send(confirm.err)
                }
            }else{
                res.status(500).send("Ocorreu um erro no servidor!");
            }
        } else{
            res.status(result.status).send(result.err)
        }    
    }

    async remove(req, res){
        var id = req.params.id;

        let result = await userValidator.IdValidation(id);

        if(result.status == 200){
            var confirm = await User.delete(id);

            if(confirm.status){
                res.status(200).send("Usuário deletado com sucesso!");
            }else{
                res.status(404).send(confirm.err);
            }
        }
        else{
            res.status(result.status).send(result.err);
        }

        
    }

    async recoverPassword(req, res){
        var email = req.body.email;
        var result = await PasswordToken.create(email);
        if(result.status){
           res.status(200);
           res.send("" + result.token);
        }else{
            res.status(406)
            res.send(result.err);
        }
    }

    async changePassword(req, res){
        var token = req.body.token;
        var password = req.body.password;
        var isTokenValid = await PasswordToken.validate(token);
        if(isTokenValid.status){
            await User.changePassword(password,isTokenValid.token.user_id,isTokenValid.token.token);
            res.status(200);
            res.send("Senha alterada");
        }else{
            res.status(406);
            res.send("Token inválido!");
        }
    }

    async login(req, res){
        var {email, password } = req.body;

        let result = await userValidator.loginValidation(email, password);

        if(result.status == 200){
            res.status(result.status).send(result.token);
        } else{
            res.status(result.status).send(result.err);
        }       
    }

}

module.exports = new UserController();