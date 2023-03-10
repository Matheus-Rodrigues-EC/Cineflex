import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Seats(props){

    const api = axios.create();
    const Navigator = useNavigate();
    const { seats, session, dataSession, setReservation, selects, setSelects, setId } = props;
    const [assentos, setAssentos] = useState();
    const [reservations, setReservations] = useState([]);
    const [Name, setName] = useState("");
    const [CPF, setCPF] = useState("");


    useEffect(() => {
        api.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${seats}/seats`)
            .then((response) => setAssentos(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        });

    // const notAvailable = assentos.
        
    function addReservation(id, num){
        const newReserv = [...reservations];
        setReservations([...newReserv, id]);
        const newSelect = [...selects];
        setSelects([...newSelect, num])
        // console.log(newReserv);
    }
    
    function delReservation(id, num){
        const indexID = reservations.indexOf(id);
        reservations.splice(indexID, 1);
        const indexName = selects.indexOf(num);
        selects.splice(indexName, 1);
        // console.log(newReserv);
    }

    function doReservation(idList, name, cpf){
        if(reservations.length === 0){
            alert("Você deve selecionar pelo menos um assento.");
            return;
        }
        if(Name === ""){
            alert("Você deve digitar seu nome.");
            return;
        }
        if(CPF === ""){
            alert("Você deve digitar seu CPF.");
            return;
        }
        
        const Reserv = {
            ids: reservations,
            name: Name,
            cpf: CPF
        }
        setReservation(Reserv);
        setId(0);

        api.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, Reserv);

        Navigator(`/sucesso`)
    }

    while(true){
        if(assentos === undefined){
            return <h2>Loading...</h2>;
        }else{
            break;
        }
    }
    const Assentos = assentos.seats;

    return(
        <>
            <SeatsContainer>
                {Assentos.map((seat) => (
                    (seat.isAvailable === false) ? (
                        <NotAvailable onClick={() => alert("Esse assento não está disponível")} key={seat.id} data-test="seat" >
                            {seat.name}
                        </NotAvailable>
                    ) : (reservations.includes(seat.id)) ? (
                        <Selected onClick={() => {delReservation(seat.id, seat.name);}} key={seat.id} data-test="seat" >
                            {seat.name}
                        </Selected>
                    ) : (
                        <SeatItem onClick={() => {addReservation(seat.id, seat.name);}} key={seat.id} data-test="seat" >
                            {seat.name}
                        </SeatItem>
                    )
                ))}
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <Selected />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <Available />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <NotAvailable />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer >
                Nome do Comprador:
                <input placeholder="Digite seu nome..." value={Name} onChange={(e) => setName(e.target.value)} data-test="client-name" />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..."  value={CPF} onChange={(e) => setCPF(e.target.value)} data-test="client-cpf" />

                <button onClick={() => doReservation()} data-test="book-seat-btn" >
                    Reservar Assento(s)
                </button>
            </FormContainer>

            <FooterContainer data-test="footer" >
                <div>
                    <img src={session.posterURL} alt={session.overview} />
                </div>
                <div>
                    <p>{session.title}</p>
                    <p>{dataSession.Day} - {dataSession.Hour}</p>
                </div>
            </FooterContainer>

        </>
    )
}

const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const Available = styled.div`
    border: 1px solid #7B8B99;
    background-color: #C3CFD9;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const Selected = styled.div`
    border: 1px solid #0E7D71;
    background-color: #1AAE9E;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const NotAvailable = styled.div`
    border: 1px solid #F7C52B;
    background-color: #FBE192;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    padding-top: 1px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const SeatItem = styled.div`
    border: 1px solid #7B8B99;
    background-color: #C3CFD9;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
        p {
            display: inline-flex;
            text-align: left;
            align-items: center;
            justify-content: center;
            
        }
    }
`