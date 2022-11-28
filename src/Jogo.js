import styled from "styled-components"

export default function Jogo(props) { 

    return (
<>
    <div className="direita">
        <img data-test='game-image' src ={props.imagens[props.erro]} alt="Forca"/>
    </div>
    <div className="esquerda">
        <button data-test='choose-word' onClick={props.comecarJogo} className="escolha">Escolher Palavra</button>
        <div className='palavras'>
        <Palavra data-test='world' cor={props.cor}>{props.palavra}</Palavra>
        </div>
    </div>
</>
    )
}

const Palavra = styled.h1`
  font-size: 50px;
  font-family: 'noto sans';
  color:${(props) => props.cor}
`
