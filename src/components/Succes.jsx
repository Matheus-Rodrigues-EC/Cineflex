import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sucess(props){

    const { dataSession, reservation, selects, setSelects } = props;

    return(
        <>
            <TextContainer data-test="movie-info" >
                <strong><p>Filme e sessão</p></strong>
                <p>{dataSession.Name}</p>
                <p>{dataSession.Date} - {dataSession.Hour}</p>
            </TextContainer>

            <TextContainer data-test="seats-info" >
                <strong><p>Ingressos</p></strong>
                {selects.map((seat) => <p key={seat.id}>Assento {seat}</p>)}
            </TextContainer>

            <TextContainer data-test="client-info" >
                <strong><p>Comprador</p></strong>
                <p>Nome: {reservation.name}</p>
                <p>CPF: {reservation.cpf}</p>
            </TextContainer>


            <Link to={'/'} data-test="go-home-btn">
                <button onClick={() =>{setSelects([])}} data-test="go-home-btn" >Voltar para Home</button>
            </Link>
        </>
    )
}

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
    
`

