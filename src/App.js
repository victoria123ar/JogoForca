import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import { useState } from "react";
import Forca0 from "./assets/forca0.png";
import Forca1 from "./assets/forca1.png";
import Forca2 from "./assets/forca2.png";
import Forca3 from "./assets/forca3.png";
import Forca4 from "./assets/forca4.png";
import Forca5 from "./assets/forca5.png";
import Forca6 from "./assets/forca6.png";
import palavras from "./Palavras";

export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const imagens = [Forca0, Forca1, Forca2, Forca3, Forca4, Forca5, Forca6];
  const [desabilitarInput, setDesabilitarInput] = useState(true);
  const [palavraSelecionada, setPalavraSelecionada] = useState([]);
  const [palavra, setPalavra] = useState([]);
  const [letrasSelecionadas, setLetrasSelecionadas] = useState(alfabeto);
  const [cor, setCor] = useState("black");
  const [chute, setChute] = useState("");
  const [erro, setErro] = useState(0);
  const [novoArrayPalavras, setNovoArrayPalavras] = useState('')

  function comecarJogo() {
    setDesabilitarInput(false);
    setLetrasSelecionadas([]);
    sortearPalavras();
    setErro(0);
    setChute("");
    setCor("black");
  }

  function finalizarJogo() {
    setLetrasSelecionadas(alfabeto);
    setDesabilitarInput(true);
    setChute("");
    setPalavra(palavraSelecionada);
  }

  function sortearPalavras() {
    const palavrasSorteadas = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[palavrasSorteadas];
    const novoArrayPalavras = palavra.split("");
    setPalavraSelecionada(novoArrayPalavras);

    let tracos = [];
    novoArrayPalavras.forEach((letra) => tracos.push(" _"));
    setPalavra(tracos);
    setNovoArrayPalavras(novoArrayPalavras)
  }

  function clicar(letter) {
    setLetrasSelecionadas([...letrasSelecionadas, letter])
    if(novoArrayPalavras.includes(letter)){
        acertar(letter)
    } else {
        errar(letter)
    }
}

function acertar(letter){
    const palavraNova = [...palavra]
    palavraSelecionada.forEach((letra, i) => {
        if(novoArrayPalavras[i] === letter){
            palavraNova[i] = letra
        }
    })
    setPalavra(palavraNova)

    if(!palavraNova.includes(" _")){
        setCor("green")
        finalizarJogo()
    }
}

function errar(){
    const novaQuantidadeErros = erro + 1
    setErro(novaQuantidadeErros)

    if(novaQuantidadeErros === 6){
        setCor("red")
        finalizarJogo()
    }

}

function chutar(){
    let chute = palavraSelecionada.join("")
    if(chute === palavraSelecionada){
        setCor("green")
    } else {
        setCor("red")
        setErro(6)
    }
    finalizarJogo()
}

  return (
  <>
    <div className="encima">
      <Jogo 
       imagens={imagens} 
       erro={erro} 
       comecarJogo={comecarJogo} 
       cor={cor} 
       palavra={palavra}/>
       </div>
       <div className="embaixo">
       <Letras 
       alfabeto={alfabeto}
       letrasSelecionadas={letrasSelecionadas}
       clicar={clicar}/>
      <Chute 
      desabilitarInput={desabilitarInput}
      chute={chute}
      setChute={setChute}
      chutar={chutar}/>
</div>
</>
);
}
