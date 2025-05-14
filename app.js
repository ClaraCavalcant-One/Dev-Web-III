// Importação dos Modulos:
const http = require('http');  // Modulo usado para uso do protocolo http
const url = require('url');    // Modulo para tratar URL (caminho) 


// Configuração do Projeto (temporario):
const PORT = 4500;

// Criação do Servidor:
const server = http.createServer((req, res) => {
    // Utilizando o Modulo URL (Criando os end points):
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;
    // Comparação e criação dos end-points:
    if (path === '/'){
        res.writeHead(200, {'content-type': "text/plain; charset=utf-8"});
        res.end("Pagina Principal do Projeto");

    } else if (path === '/imc') {
        // Receber as variaveis digitadas na URL:
        var valorPeso = parseFloat(query.peso);
        var valorAltura = parseFloat(query.altura);

        // Processsar as informações:
        if (isNaN(valorAltura) || isNaN(valorPeso)){
            res.writeHead(400, {'content-type': 'text/plain; charset=utf-8'});
            res.end("400 - Entrada Invalida - Entre com valores validos.");
        } else {
            // Calculo do IMC:
            var valorIMC = valorPeso / (valorAltura * valorAltura);

            // Classificação do IMC:
                // Implementar a logica de classificação do IMC

            // Mostrar os resultados:
            res.writeHead(200, {'content-type': 'text/plain; charset=utf-8'})
            res.end(`IMC: ${valorIMC.toFixed(2)} - Peso: ${valorPeso.toFixed(2)} e Altura: ${valorAltura.toFixed(2)}`);
        }



    }
    else {
        res.writeHead(404, {'content-type': "text/plain; charset=utf-8"});
        res.end("Pagina Não Encontrada")
    }

})
// Configuração do Servidor:
server.listen(PORT, () => {
    console.log(`[CONECTADO] - Servidor iniciado em porta: ${PORT}`);
})