var jwt = require("jsonwebtoken");


module.exports = function(req, res, next){
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        const bearer = authToken.split(' ');
        var token = bearer[1];

        try{
            var decoded = jwt.verify(token,process.env.TOKEN_SECRET);
            
            if(decoded.role == 1){
                next();
            }else{
                res.status(401).send("Você não tem permissão para isso!");
                return;
            }
        }catch(err){
            res.status(500).send("Ocorreu um erro interno!");
            return;
        }
    }else{
        res.status(401).send("Você não está autenticado!");
        return;
    }
}