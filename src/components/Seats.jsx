import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Seats(props){

    const api = axios.create();
    const { seats, session, dataSession } = props;
    const [assentos, setAssentos] = useState();
    const [reservation, setReservation] = useState([]);

    useEffect(() => {
        api.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${seats}/seats`)
            .then((response) => setAssentos(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        });

    // const notAvailable = assentos.
        
    function addReservation(locate){
        const newReserv = [...reservation];
        setReservation([...newReserv, locate]);
        // console.log(newReserv);
    }
    
    function delReservation(locate){
        const index = reservation.indexOf(locate);
        const newReserv = reservation.splice(index, 1);
        // console.log(newReserv);
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
                    <>
                    {
                    (seat.isAvailable === false) ? (
                        <NotAvailable key={seat.name} >
                            {seat.name}
                        </NotAvailable>
                    ) : (reservation.includes(seat.name)) ? (
                        <Selected onClick={() => {delReservation(seat.name);}} key={seat.id} >
                            {seat.name}
                        </Selected>
                    ) : (
                        <SeatItem onClick={() => {addReservation(seat.name);}} key={seat.id} >
                            {seat.name}
                        </SeatItem>
                    )

                    }
                    </>
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

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={session.posterURL} alt="poster" />
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
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`