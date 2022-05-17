const { Produto } = require('./models')

const Inserir = [
  {
    "imagem": "img/alinhamento-balanceamento.jpg",
    "nome": "Revisão Completa",
    "descricao": "Revisão total para seu veículo",
    "valor": 1500
  },
  {
    "imagem": "img/jogo-de-rodas.webp",
    "nome": "Jg Roda Aro 20 Audi",
    "descricao": "Jogo de rodas para Audi",
    "valor": 5500
  },
  {
    "imagem": "img/mercedes.webp",
    "nome": "Mercedes CLA 250 - 2022/2022",
    "descricao": "Veículo de extrema imponência e perfeita utilização",
    "valor": 310.900
  },
  {
    "imagem": "img/tapete.webp",
    "nome": "Tapete Carpete Ferrari Testarossa 84 A",
    "descricao": "A melhor qualidade em tapetes automotivos",
    "valor": 899
  },
  {
    "imagem": "img/mercedesc200.webp",
    "nome": "Mercedes-Benz C 200",
    "descricao": "O novo Classe C une esportividade, elegância e minimalismo",
    "valor": 349.900
  },
  {
    "imagem": "img/blindagem.jpg",
    "nome": "Blindagem e assistência",
    "descricao": "Profissionais altamente qualificados para a blindagem do seu veículo.",
    "valor": 54.900
  },
  {
    "imagem": "img/pintura-carro.jpg",
    "nome": "Pintura Automotiva",
    "descricao": "Pintura com alta qualidade, usando tinta ecologicamente correta.",
    "valor": 3000
  },
]

async function app() {
  for(const p of Inserir){
    await Produto.create(p)
  }
}

app()