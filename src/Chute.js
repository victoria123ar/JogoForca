export default function Chute({desabilitarInput, chute, setChute, chutar}) {
    return (
        <div className="texto">
        <p>Já sei a palavra!</p>
        <input data-test='guess-imput' disabled={desabilitarInput} value={chute} onChange={(e) => setChute(e.target.value)} type="text"/>
        <button data-test='guess-button' onClick={chutar} className="chute">Chutar</button>
        </div>
    )
}