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

  return (
<div className="cont-app">
<h1>Javascript no React</h1>
<button onClick={testar}>testar</button>
<button onClick={calcularMedia}>Média</button>
</div>
  )
}

export default App
