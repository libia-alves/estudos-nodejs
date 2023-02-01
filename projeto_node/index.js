

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//voce pode defiir rotas no seu site

router.get('/',function(req,res){

    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname é uma constante para apontar o diretório de onde esta meu arquivo
})

router.get('/sobre',function(req,res){

    res.sendFile(path.join(__dirname+'/sobre.html'));
    
}) 

app.use('/',router);
//l definir os roteadores
app.listen(process.env.port || 3000);
//ligar o servidor  

console.log("Server rodando");
//fechar o servidor 

