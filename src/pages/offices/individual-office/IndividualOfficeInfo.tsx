import Area from "../../../assets/homepage/area.svg?react";

interface IIndividualOfficeInfo {
    area: number,
    name: string,
    price: number,
}

const IndividualOfficeInfo: React.FunctionComponent<IIndividualOfficeInfo> = ({
    area, name, price
}: IIndividualOfficeInfo) => {

  return (
    <div className="individual-office-info">
      <span className="area">
        <Area />
        {area}m&#178;
      </span>
      <span className="name">
        Casa Verde - 
        <span style={{ textWrap: "nowrap" }} >{name}</span>
      </span>
      <span className="price">Desde {price}/Mês</span>
      <span className="description">
        A Casa Verde oferece
        { name === "Loja" ? " uma loja única, situada ": ( name === "Sala Reuniões" ? " uma sala de reuniões, situada " : " gabinetes únicos, situados ") }
        numa casa histórica cuidadosamente restaurada, onde o charme do passado se encontra com a funcionalidade moderna.
        { name === "Loja" ? " Este espaço comercial ":( name === "Sala Reuniões" ? " Esta sala de reuniões " : " Este gabinete ") }
        com {area}m&#178; é perfeito para quem procura uma localização central e um ambiente acolhedor para o seu negócio.
      </span>
    </div>
  )
}

export default IndividualOfficeInfo;
