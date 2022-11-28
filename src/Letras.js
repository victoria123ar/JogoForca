export default function Letras(props) {
  const { alfabeto, letrasSelecionadas, clicar } = props;

  return (
    <div className="letras">
      {alfabeto.map((letra) => (
        <button data-test='letter'
          className="letra"
          key={letra}
          onClick={() => clicar(letra)}
          disabled={letrasSelecionadas.includes(letra)}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}
