import './App.css'

function App() {
  
  function testar() {
    let nome = prompt('Qual é o seu nome?');
    let bocaDoSapo = nome
    alert(`${nome}, seu nome está na bocaDoSapo 🐸`)
  }

  function calcularMedia() {
    let nota1 = Number(prompt('Digite a primeira nota:'));
    let nota2 = Number(prompt('Digite a segunda nota:'));
    let media = (nota1 + nota2) / 2;
    alert(`A média é: ${media}`);
  }

  function calcularPontos() {
    let vitorias = Number(prompt('Digite o número de vitórias:'));
    let empates = Number(prompt('Digite o número de empates:')); 
    let pontos = vitorias * 3 + empates;
    alert(`Você tem ${pontos} pontos!`);
  }

  function trocarSapatos() {
    let precopar = Number(prompt('Digite o preço do par de sapatos:'));
    alert(`O preço do par de sapatos é: R$ ${precopar.toFixed(2)}`);
    let sapatostrocados = Number(prompt('Digite o número de sapatos trocados:'));
    alert(`Você trocou ${sapatostrocados} sapatos!`);
    let lucro = sapatostrocados * precopar;
    alert(`Você obteve um lucro de R$ ${lucro.toFixed(2)} com as trocas!`);
  }

function empregados() {
  let CLT = Number(prompt('Digite o número de funcionários CLT:'));
  let PJ = Number(prompt('Digite o número de funcionários PJ:'));
  let estagiarios = Number(prompt('Digite o número de estagiários:'));
  alert(`A empresa tem ${CLT} funcionários CLT, ${PJ} funcionários PJ e ${estagiarios} estagiários.`);
  let total = CLT + PJ + estagiarios;
  alert(`O total de funcionários é: ${total}`);
}

function pomar() {
  let laranjasi = Number(prompt('Digite o número inicial de laranjas:'));
  let laranjasf = Number(prompt('Digite o número final de laranjas:'));
  let laranjasv = laranjasi - laranjasf;
  alert(`Você tem ${laranjasv} laranjas sobrando.`);
}

function dizimar() {
  let custosmensais = Number(prompt('Digite os custos mensais:'));
  alert(`Os custos mensais são: R$ ${custosmensais.toFixed(2)}`);
  let dizimoganho = Number(prompt('Digite o dízimo ganho:'));
  alert(`O dízimo é: R$ ${dizimoganho.toFixed(2)}`);
  let faltapagar = custosmensais - dizimoganho;
  alert(`Você ainda precisa pagar: R$ ${faltapagar.toFixed(2)}`);
}

function trampar() {
  let salario = Number(prompt('Digite o salário:'));
  alert(`O salário é: R$ ${salario.toFixed(2)}`);
  let diastrampo = Number(prompt('Digite o número de dias trabalhados:'));
  alert(`Você trabalhou ${diastrampo} dias.`);
  let valorporDia = salario / 30;
  alert(`O valor por dia é: R$ ${valorporDia.toFixed(2)}`);
  let valorsemana = valorporDia * 5;
  alert(`O valor por semana é: R$ ${valorsemana.toFixed(2)}`);
}

function carga() {
  let pesobruto = Number(prompt('Digite o peso bruto da carga:'));
  alert(`O peso bruto da carga é: ${pesobruto} kg`);
  let tara = Number(prompt('Digite a tara da carga:'));
  alert(`A tara da carga é: ${tara} kg`);
  let pesoLiquido = pesobruto - tara;
  alert(`O peso líquido da carga é: ${pesoLiquido} kg`);
}

function recrutar() {
  let olhada = Number(prompt('Digite o número de vezes que o candidato olhou o celular:'));
  if (isNaN(olhada) || olhada < 0) {
    alert('Por favor, digite um número válido de olhadas.');
    return;
  }
  let chanceAprovacao = (0.1 / (1 + 500 * olhada)) * 100;
  alert(`O candidato usou o celular ${olhada} vez(es) durante as etapas.`);
  alert(`Baseado no método, a chance de aprovação deste candidato é de: ${chanceAprovacao.toFixed(4)}%`);
  let umaEmCada = 100 / chanceAprovacao;
  if (olhada === 0) {
    alert(`Estatística: Com essa dedicação, 1 em cada ${umaEmCada.toFixed(0)} candidatos com esse perfil é aprovado! (Chance máxima de 10%)`);
  } else {
    alert(`Estatística: Apenas 1 em cada ${umaEmCada.toFixed(0)} candidatos com esse comportamento consegue ser aprovado.`);
  }
}

function transportar() {
  let peso = Number(prompt('Digite o peso da carga:'));
  let distancia = Number(prompt('Digite a distância:'));
  let volume = Number(prompt('Digite o volume da carga:'));
  let frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume);
  alert(`O preço do frete é: R$ ${frete.toFixed(2)}`);
}

function jogar() {
  let faturamento = Number(prompt('Digite o faturamento total:'));
  let premiacoes = Number(prompt('Digite o valor pago em premiações:'));
  let presentes = Number(prompt('Digite o valor gasto em "presentes":'));
  let comissoes = Number(prompt('Digite o valor das comissões:'));
  let lucro = faturamento - premiacoes - presentes - comissoes;
  alert(`O lucro da Dona Bete é: R$ ${lucro.toFixed(2)}`);
}

function vender() {
  let gastos = Number(prompt('Digite o valor gasto em suprimentos e mercadorias:'));
  let fatIngressos = Number(prompt('Digite o faturamento em venda de ingressos:'));
  let fatItens = Number(prompt('Digite o faturamento em venda de ítens:'));
  let lucro = (fatIngressos + fatItens) - gastos;
  let percentualLucro = (lucro / (fatIngressos + fatItens)) * 100;
  alert(`O lucro obtido é: R$ ${lucro.toFixed(2)}`);
  alert(`O lucro percentual é: ${percentualLucro.toFixed(2)}%`);
}

function show() {
  let shows = Number(prompt('Digite a quantidade de shows que Sarumano tem marcado:'));
  let precoUnitario = Number(prompt('Digite o preço unitário da bomba de fumaça:'));
  let bombasNecessarias = shows * 7;
  let custoTotal = bombasNecessarias * precoUnitario;
  alert(`Sarumano precisa comprar ${bombasNecessarias} bombas de fumaça.`);
  alert(`O custo total para comprar as bombas é: R$ ${custoTotal.toFixed(2)}`);
}

function pagar() {
  let salario = Number(prompt('Digite o valor do salário:'));
  let moradia = Number(prompt('Digite o valor da conta de moradia:'));
  let agua = Number(prompt('Digite o valor da conta de água:'));
  let luz = Number(prompt('Digite o valor da conta de luz:'));
  let internet = Number(prompt('Digite o valor da conta de internet:'));
  let gasolina = Number(prompt('Digite o valor da conta de gasolina:'));
  let streamings = Number(prompt('Digite o valor da conta de streamings:'));
  let telefone = Number(prompt('Digite o valor da conta de telefone:'));
  let outros = Number(prompt('Digite o valor da conta de outros:'));
  let sobra = salario - (moradia + agua + luz + internet + gasolina + streamings + telefone + outros);
  alert(`O que sobrou no fim do mês é: R$ ${sobra.toFixed(2)}`);
}

function revender() {
  let custo = Number(prompt('Digite o valor que você pagou pela obra:'));
  let precoVenda = custo * 3;
  alert(`O preço de venda da obra deve ser: R$ ${precoVenda.toFixed(2)}`);
}

function racao() {
  let peso = Number(prompt('Digite o peso da ração em gramas:'));
  let preco = (peso / 1000) * 10;
  alert(`O preço da ração é: R$ ${preco.toFixed(2)}`);
}

function churrasco() {
  let pessoas = Number(prompt('Digite o número de pessoas:'));
  let carne = pessoas * 0.5;
  let cerveja = pessoas * 1;
  let agua = pessoas * 0.5;
  let refri = pessoas * 0.2;
  alert(`Para ${pessoas} pessoas, você precisa de:`);
  alert(`${carne.toFixed(2)}kg de carne`);
  alert(`${cerveja.toFixed(2)}l de cerveja`);
  alert(`${agua.toFixed(2)}l de água`);
  alert(`${refri.toFixed(2)}l de refrigerante`);
}

function venderjare() {
  let caminhoes = Number(prompt('Digite o número de caminhões:'));
  let jarésVendidos = caminhoes * 50;
  let faturamento = jarésVendidos * 90;
  let custo = caminhoes * 450;
  let lucro = faturamento - custo;
  alert(`O lucro da temporada de vendas é: R$ ${lucro.toFixed(2)}`);
}

function ler() {
  let caracteres = Number(prompt('Digite o número de caracteres do prompt:'));
  let custoToken = Number(prompt('Digite o custo do token (R$):'));
  let tokensUsados = 5 + caracteres;
  let custoTotal = tokensUsados * custoToken;
  alert(`O número de tokens usados é: ${tokensUsados}`);
  alert(`O custo total do prompt é: R$ ${custoTotal.toFixed(2)}`);
}

function freeler() {
  let horas = Number(prompt('Digite a quantidade estimada de horas:'));
  let precoCobrado = 500 + (horas * 350);
  let lucro = precoCobrado - 500;
  alert(`O preço que Junin deve cobrar do seu cliente é: R$ ${precoCobrado.toFixed(2)}`);
  alert(`O lucro do freela é: R$ ${lucro.toFixed(2)}`);
}

function relatar() {
  let relPF = Number(prompt('Digite a quantidade de relatórios para PF:'));
  let relPJ = Number(prompt('Digite a quantidade de relatórios para PJ:'));
  let tempoPF = Number(prompt('Digite o tempo para elaborar os relatórios PF (em horas):'));
  let tempoPJ = Number(prompt('Digite o tempo para elaborar os relatórios PJ (em horas):'));
  let valorPF = Number(prompt('Digite o valor total recebido de PF (em R$):'));
  let valorPJ = Number(prompt('Digite o valor total recebido de PJ (em R$):'));

  let totalRelatorios = relPF + relPJ;
  let tempoTotal = tempoPF + tempoPJ;
  let valorTotal = valorPF + valorPJ;
  let mediaValorPF = valorPF / relPF || 0;
  let mediaValorPJ = valorPJ / relPJ || 0;
  let mediaTempoPF = tempoPF / relPF || 0;
  let mediaTempoPJ = tempoPJ / relPJ || 0;

  alert(`Quantidade total de relatórios: ${totalRelatorios}`);
  alert(`Tempo total trabalhado: ${tempoTotal} horas`);
  alert(`Valor total recebido: R$ ${valorTotal.toFixed(2)}`);
  alert(`Média de valor recebido para cada relatório PF: R$ ${mediaValorPF.toFixed(2)}`);
  alert(`Média de valor recebido para cada relatório PJ: R$ ${mediaValorPJ.toFixed(2)}`);
  alert(`Média de tempo gasto por relatório PF: ${mediaTempoPF.toFixed(2)} horas`);
  alert(`Média de tempo gasto por relatório PJ: ${mediaTempoPJ.toFixed(2)} horas`);
}

  return (
<div className="cont-app">
<h1>Javascript no React</h1>
<h2>Exercícios supimpas</h2>
<button onClick={calcularPontos}>Campeonato (A1)</button>
<button onClick={trocarSapatos}>Trocas Pé Pequeno (A2)</button>
<button onClick={empregados}>Trabalhadores da Empresa (A3)</button>
<button onClick={pomar}>Projeto Pomar (A4)</button>
<button onClick={dizimar}>Igreja (A5)</button>
<button onClick={trampar}>Trabalho Dev (A6)</button>
<button onClick={carga}>Carga do Caminhão (A7)</button>
<button onClick={recrutar}>Olhada Celular (A8)</button>
<button onClick={transportar}>frete (B1)</button>
<button onClick={jogar}>jogo de aposta (B2)</button>
<button onClick={vender}>Vender Ingressos (B3)</button>
<button onClick={show}>Ilusionismo (B4)</button>
<button onClick={pagar}>Despesas (B5)</button>
<button onClick={revender}>Revender Artes (B6)</button>
<button onClick={racao}>Pet Shop (B7)</button>
<button onClick={churrasco}>Churrascaria do Gaúcho (B8)</button>
<button onClick={venderjare}>Vender Jaré (C1)</button>
<button onClick={ler}>Istartup I.A (C2)</button>
<button onClick={freeler}>Projetos Freeler (C3)</button>
<button onClick={relatar}>Relatório do Kovalski (C4)</button>
<hr />
<button onClick={testar}>testar</button>
<button onClick={calcularMedia}>Média</button>
</div>
  )
}

export default App
