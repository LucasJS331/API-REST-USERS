let express = require("express");
let app = express();
let router = require("../routes/routes");
let port = 3000;
 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/",router);

app.listen(port,() => {
    console.log("Servidor rodando na porta " + port);
});

