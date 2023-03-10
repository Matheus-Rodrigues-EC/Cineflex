import styled from "styled-components"
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export default function Session(props){

    const api = axios.create();
    const { id, setSeats, session, setSession, setDataSession } = props;
    
    const Navigator = useNavigate();

    useEffect(() => {

        api.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`)
            .then((response) => setSession(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    });

    // if(session === undefined) return <h2>Loading...</h2>;

    const Days = session.days;

    function setDatasSession(seats, day, date, hour){
        setSeats(seats);
        setDataSession({Name: session.title, Day: day, Date: date, Hour: hour});
        Navigator(`/assentos/${seats}`);
    }

    return(
        <>
            <SessionContainer>
                {Days.map((dia) => (
                    <Infos key={dia.id} data-test="movie-day">
                        <h2 key={dia.weekday} >{dia.weekday} - {dia.date}</h2>
                        <Buttons key={dia.releaseDate} >
                        {dia.showtimes.map((hora) => (
                            <Button key={hora.id} onClick={() => {setDatasSession(hora.id, dia.weekday, dia.date, hora.name );}} data-test="showtime" >
                                {hora.name}
                            </Button>
                        ))}
                        </Buttons>
                    </Infos>
                ))}
                <FooterContainer data-test="footer">
                    <div>
                        <img src={session.posterURL} alt={session.overview} />
                    </div>
                    <div>
                        <p>{session.title}</p>
                    </div>
                </FooterContainer>

                
            </SessionContainer> 

            
        </>
    )

}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 ;
`
const Infos = styled.div`
    display: block;
    margin: 0 20px;
`
const Buttons = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
`
const Button = styled.button`
    display: flex;
    width: 83px;
    height: 43px;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;

    background: #E8833A;
    color: #FFFFFF;
    border-radius: 3px;
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
        margin: 0;
        p {
            display: inline-flex;
            text-align: left;
            align-items: center;
            justify-content: center;
            
        }
    }
`