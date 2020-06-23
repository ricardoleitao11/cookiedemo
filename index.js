//chamada do node express para uma aplicacao express
const app = require("express")()

//se alguem fizer uma requisicao GET na raiz '/', fazer a funcao request-response
app.get("/", (req, res) => {

    //o servidor manda o cliente criar o cookie, que depois será enviado de volta para o servidor
    res.setHeader("set-cookie", ["setfromserver=1"])

    //cookie httponly, que nao pode ser visto pelo cliente, apenas pelo servidor
    res.setHeader("set-cookie", ["jscantseethis=1; httponly"])
    
    //retorna o arquivo chamado index.html
    res.sendFile(`${__dirname}/index.html`)
})

//se alguem visitar o caminho /img, sera enviada a imagem cookie.png
app.get("/img", (req, res) => {

    //criando um cookie de rastreamento pelo web server
    res.setHeader("set-cookie", ["iamtrackingyou=1;"])

    //envia a imagem cookie.png como resposta da requisicao
    res.sendFile(`${__dirname}/cookie.png`)
})

//criar um caminho para retornar todos os cookies que foram enviados para o cliente
app.get("/path1", (req, res) => {

    //envia os cookies de requisicao como resposta
    res.send(`Path1 - I have been sent these cookies: ${req.headers.cookie}`)
})

//mesmo processo do path1
app.get("/path2", (req, res) => {

    //envia os cookies de requisicao como resposta
    res.send(`Path2 - I have been sent these cookies: ${req.headers.cookie}`)
})

//cria uma chamada GET, quando clicado na ancora, que retorna como resposta da requisicao, os cookies da pagina inicial
app.get("/steal", (req, res) => {

    //envia os cookies resgatados quando clicado na ancora. O parametro 'v' passado na url da ancora, é chamado aqui para ser printado
    res.send(`Hey I stole your cookies... I saved them in my databases as well. Here are they ${req.query.v}`)
})

//ouvir a porta para receber as requisicoes
app.listen(8080, ()=> console.log("listening on port 8080")) 