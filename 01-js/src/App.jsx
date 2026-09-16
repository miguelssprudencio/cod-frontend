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


  return (
<div className="cont-app">
<h1>Javascript no React</h1>
<h2>Exercícios supimpas</h2>
<button onClick={calcularPontos}>Campeonato</button>
<button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
<button onClick={empregados}>Trabalhadores da Empresa</button>
<button onClick={pomar}>Projeto Pomar</button>
<button onClick={dizimar}>Igreja</button>
<button onClick={trampar}>Trabalho Dev</button>
<button onClick={carga}>Carga do Caminhão</button>
<button onClick={recrutar}>Olhada Celular</button>
<hr />
<button onClick={testar}>testar</button>
<button onClick={calcularMedia}>Média</button>
</div>
  )
}

export default App
